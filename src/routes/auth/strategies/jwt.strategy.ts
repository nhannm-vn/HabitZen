/**
 * Chiến lược Passport JWT — trích token Bearer, giải mã payload,
 * tải user từ DB và gắn RequestUser cho guard toàn cục.
 */
import { Injectable, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/shared/services/prisma.service';
import { JwtPayload } from 'src/common/interfaces/jwt-payload.interface';
import { RequestUser } from 'src/common/interfaces/request-user.interface';
import { BusinessException } from 'src/common/exceptions/business.exception';
import { ErrorCodes } from 'src/common/constants/error-codes';

/** Validate JWT và map sang đối tượng user trên request. */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.getOrThrow<string>('jwt.secret'),
    });
  }

  /**
   * Gọi sau khi JWT hợp lệ — kiểm tra user còn tồn tại và chưa bị khóa.
   * @returns RequestUser gắn vào @CurrentUser()
   */
  async validate(payload: JwtPayload): Promise<RequestUser> {
    const user = await this.prisma.user.findFirst({
      where: { id: payload.sub, deletedAt: null },
    });

    if (!user) {
      throw new BusinessException(
        ErrorCodes.UNAUTHORIZED,
        'User not found',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (!user.isActive) {
      throw new BusinessException(
        ErrorCodes.AUTH_BR04,
        'Account is locked',
        HttpStatus.FORBIDDEN,
      );
    }

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      timezone: user.timezone,
    };
  }
}
