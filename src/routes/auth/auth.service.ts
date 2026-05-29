/**
 * Service nghiệp vụ xác thực: đăng ký, đăng nhập, profile, đổi mật khẩu.
 * Hash mật khẩu bằng bcrypt; phát JWT; loại bỏ trường nhạy cảm khi trả về client.
 */
import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/shared/services/prisma.service';
import { BusinessException } from 'src/common/exceptions/business.exception';
import { ErrorCodes } from 'src/common/constants/error-codes';
import {
  isPasswordStrong,
  PASSWORD_REQUIREMENTS_MESSAGE,
} from 'src/common/utils/password.util';
import { JwtPayload } from 'src/common/interfaces/jwt-payload.interface';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  /** Loại bỏ passwordHash và trường nội bộ khỏi object user trả API. */
  private sanitizeUser(user: {
    id: string;
    email: string;
    fullName: string;
    timezone: string;
    role: string;
    isActive: boolean;
    lastLoginAt: Date | null;
    createdAt: Date;
  }) {
    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      timezone: user.timezone,
      role: user.role,
      isActive: user.isActive,
      lastLoginAt: user.lastLoginAt,
      createdAt: user.createdAt,
    };
  }

  /** Tạo JWT access token từ thông tin user. */
  private async signToken(user: {
    id: string;
    email: string;
    role: string;
    timezone: string;
  }) {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role as JwtPayload['role'],
      timezone: user.timezone,
    };
    const accessToken = await this.jwt.signAsync(payload);
    return { accessToken, tokenType: 'Bearer' as const };
  }

  /**
   * Đăng ký user mới: kiểm tra email trùng, độ mạnh mật khẩu, hash và trả token.
   */
  async register(dto: RegisterDto) {
    if (!dto.email || !dto.password || !dto.fullName) {
      throw new BusinessException(
        ErrorCodes.AUTH_BR02,
        'Email, password and full name are required',
      );
    }

    if (!isPasswordStrong(dto.password)) {
      throw new BusinessException(
        ErrorCodes.AUTH_BR03,
        PASSWORD_REQUIREMENTS_MESSAGE,
      );
    }

    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });
    if (existing && !existing.deletedAt) {
      throw new BusinessException(
        ErrorCodes.AUTH_BR01,
        'Email is already registered',
        HttpStatus.CONFLICT,
      );
    }

    const rounds = this.config.get<number>('bcryptRounds') ?? 10;
    const passwordHash = await bcrypt.hash(dto.password, rounds);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email.toLowerCase(),
        passwordHash,
        fullName: dto.fullName.trim(),
        timezone: dto.timezone ?? 'Asia/Ho_Chi_Minh',
      },
    });

    const tokens = await this.signToken(user);
    return {
      user: this.sanitizeUser(user),
      ...tokens,
    };
  }

  /**
   * Đăng nhập: so khớp mật khẩu, kiểm tra isActive, cập nhật lastLoginAt.
   */
  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (!user || user.deletedAt) {
      throw new BusinessException(
        ErrorCodes.UNAUTHORIZED,
        'Invalid email or password',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (!user.isActive) {
      throw new BusinessException(
        ErrorCodes.AUTH_BR04,
        'Account is locked. Please contact support.',
        HttpStatus.FORBIDDEN,
      );
    }

    const valid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!valid) {
      throw new BusinessException(
        ErrorCodes.UNAUTHORIZED,
        'Invalid email or password',
        HttpStatus.UNAUTHORIZED,
      );
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    const tokens = await this.signToken(user);
    return {
      user: this.sanitizeUser({ ...user, lastLoginAt: new Date() }),
      ...tokens,
    };
  }

  /** Lấy profile theo userId từ JWT. */
  async getProfile(userId: string) {
    const user = await this.prisma.user.findFirst({
      where: { id: userId, deletedAt: null },
    });
    if (!user) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'User not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.sanitizeUser(user);
  }

  /** Cập nhật fullName và/hoặc timezone. */
  async updateProfile(userId: string, dto: UpdateProfileDto) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        ...(dto.fullName !== undefined && { fullName: dto.fullName.trim() }),
        ...(dto.timezone !== undefined && { timezone: dto.timezone }),
      },
    });
    return this.sanitizeUser(user);
  }

  /**
   * Đổi mật khẩu: xác minh mật khẩu cũ, kiểm tra độ mạnh mật khẩu mới, hash lại.
   */
  async changePassword(userId: string, dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'User not found',
        HttpStatus.NOT_FOUND,
      );
    }

    const valid = await bcrypt.compare(dto.currentPassword, user.passwordHash);
    if (!valid) {
      throw new BusinessException(
        ErrorCodes.UNAUTHORIZED,
        'Current password is incorrect',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (!isPasswordStrong(dto.newPassword)) {
      throw new BusinessException(
        ErrorCodes.AUTH_BR03,
        PASSWORD_REQUIREMENTS_MESSAGE,
      );
    }

    const rounds = this.config.get<number>('bcryptRounds') ?? 10;
    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash: await bcrypt.hash(dto.newPassword, rounds) },
    });

    return { message: 'Password updated successfully' };
  }
}
