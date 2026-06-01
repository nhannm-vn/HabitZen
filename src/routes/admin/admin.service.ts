/**
 * Service quản trị: danh sách user, khóa/mở tài khoản, thống kê hệ thống, audit log.
 * Mọi thao tác nhạy cảm ghi vào bảng adminLog.
 */
import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { BusinessException } from 'src/common/exceptions/business.exception';
import { ErrorCodes } from 'src/common/constants/error-codes';
import { UserRole } from 'src/generated/prisma/enums';
import { UpdateUserStatusDto, AdminUserQueryDto } from './dto/admin.dto';
import { toJsonValue } from 'src/common/utils/prisma-json.util';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  /** Ghi nhật ký hành động admin vào adminLog. */
  private async logAction(
    adminId: string,
    action: string,
    targetType?: string,
    targetId?: string,
    metadata?: Record<string, unknown>,
  ) {
    await this.prisma.adminLog.create({
      data: {
        adminId,
        action,
        targetType,
        targetId,
        metadata: toJsonValue(metadata),
      },
    });
  }

  /** Danh sách user thường (không admin), có phân trang và search. */
  async listUsers(query: AdminUserQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const skip = (page - 1) * limit;

    const where = {
      deletedAt: null,
      role: UserRole.user,
      ...(query.search && {
        OR: [
          { email: { contains: query.search, mode: 'insensitive' as const } },
          {
            fullName: { contains: query.search, mode: 'insensitive' as const },
          },
        ],
      }),
    };

    const [items, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          email: true,
          fullName: true,
          role: true,
          isActive: true,
          lastLoginAt: true,
          createdAt: true,
        },
      }),
      this.prisma.user.count({ where }),
    ]);

    return {
      items,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) || 1 },
    };
  }

  /** Chi tiết user — 404 nếu không tồn tại. */
  async getUser(userId: string) {
    const user = await this.prisma.user.findFirst({
      where: { id: userId, deletedAt: null },
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
        isActive: true,
        timezone: true,
        lastLoginAt: true,
        createdAt: true,
        _count: {
          select: { habits: true },
        },
      },
    });
    if (!user) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'User not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }

  /**
   * Cập nhật isActive cho user — không cho admin tự khóa chính mình.
   */
  async updateUserStatus(
    adminId: string,
    userId: string,
    dto: UpdateUserStatusDto,
  ) {
    if (adminId === userId) {
      throw new BusinessException(
        ErrorCodes.ADM_BR06,
        'Cannot lock your own admin account',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.prisma.user.findFirst({
      where: { id: userId, deletedAt: null, role: UserRole.user },
    });
    if (!user) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'User not found',
        HttpStatus.NOT_FOUND,
      );
    }

    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: { isActive: dto.isActive },
      select: {
        id: true,
        email: true,
        fullName: true,
        isActive: true,
      },
    });

    await this.logAction(
      adminId,
      dto.isActive ? 'USER_UNLOCKED' : 'USER_LOCKED',
      'user',
      userId,
      { isActive: dto.isActive },
    );

    return updated;
  }

  /** Đếm user và habit toàn hệ thống. */
  async getSystemStats() {
    const [totalUsers, activeUsers, totalHabits, activeHabits] =
      await Promise.all([
        this.prisma.user.count({
          where: { deletedAt: null, role: UserRole.user },
        }),
        this.prisma.user.count({
          where: { deletedAt: null, role: UserRole.user, isActive: true },
        }),
        this.prisma.habit.count({ where: { deletedAt: null } }),
        this.prisma.habit.count({
          where: { deletedAt: null, status: 'active' },
        }),
      ]);

    return { totalUsers, activeUsers, totalHabits, activeHabits };
  }

  /** Danh sách adminLog có phân trang, kèm thông tin admin. */
  async getAdminLogs(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      this.prisma.adminLog.findMany({
        where: { deletedAt: null },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          admin: { select: { id: true, email: true, fullName: true } },
        },
      }),
      this.prisma.adminLog.count({ where: { deletedAt: null } }),
    ]);
    return {
      items,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) || 1 },
    };
  }
}
