/**
 * Service kiểm tra quyền sở hữu tài nguyên (habit, category).
 * Tránh truy cập chéo user; ném BusinessException với mã lỗi chuẩn khi từ chối.
 */
import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BusinessException } from 'src/common/exceptions/business.exception';
import { ErrorCodes } from 'src/common/constants/error-codes';

/** Xác thực habit/category thuộc về user hoặc được phép dùng. */
@Injectable()
export class OwnershipService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Đảm bảo thói quen tồn tại, chưa xóa mềm và thuộc userId.
   * @returns Bản ghi habit nếu hợp lệ
   */
  async assertHabitOwner(habitId: string, userId: string) {
    const habit = await this.prisma.habit.findFirst({
      where: { id: habitId, userId, deletedAt: null },
    });
    if (!habit) {
      throw new BusinessException(
        ErrorCodes.HABIT_BR02,
        'Habit not found or access denied',
        HttpStatus.NOT_FOUND,
      );
    }
    return habit;
  }

  /**
   * Đảm bảo danh mục tồn tại và user được phép gán vào habit.
   * Danh mục hệ thống (isDefault, userId null) luôn được phép.
   */
  async assertCategoryAccess(categoryId: string, userId: string) {
    const category = await this.prisma.category.findFirst({
      where: {
        id: categoryId,
        deletedAt: null,
        OR: [{ userId: null }, { userId }],
      },
    });
    if (!category) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'Category not found',
        HttpStatus.NOT_FOUND,
      );
    }
    // Danh mục mặc định hệ thống — mọi user đều dùng được
    if (category.isDefault && category.userId === null) {
      return category;
    }
    if (category.userId !== userId) {
      throw new BusinessException(
        ErrorCodes.FORBIDDEN,
        'You cannot use this category',
        HttpStatus.FORBIDDEN,
      );
    }
    return category;
  }
}
