/**
 * Service nghiệp vụ danh mục: seed mặc định, CRUD, gán fallback khi xóa.
 * Danh mục hệ thống (userId null) không cho sửa/xóa bởi user thường.
 */
import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { BusinessException } from 'src/common/exceptions/business.exception';
import { ErrorCodes } from 'src/common/constants/error-codes';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

/** Tên danh mục mặc định khi xóa category hoặc không chọn category. */
const DEFAULT_CATEGORY_NAME = 'Khác';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Gieo bộ danh mục hệ thống lần đầu (Sức khỏe, Học tập, ...).
   * Idempotent — bỏ qua nếu đã có danh mục "Khác" mặc định.
   */
  async seedDefaults() {
    const existing = await this.prisma.category.findFirst({
      where: { name: DEFAULT_CATEGORY_NAME, userId: null, isDefault: true },
    });
    if (existing) return;

    const defaults = [
      { name: 'Sức khỏe', color: '#22c55e', icon: 'heart' },
      { name: 'Học tập', color: '#3b82f6', icon: 'book' },
      { name: 'Công việc', color: '#f59e0b', icon: 'briefcase' },
      { name: 'Tài chính', color: '#10b981', icon: 'wallet' },
      { name: 'Tinh thần', color: '#a855f7', icon: 'sparkles' },
      { name: 'Gia đình', color: '#ec4899', icon: 'home' },
      {
        name: DEFAULT_CATEGORY_NAME,
        color: '#6b7280',
        icon: 'folder',
        isDefault: true,
      },
    ];

    await this.prisma.category.createMany({
      data: defaults.map((d) => ({
        name: d.name,
        color: d.color,
        icon: d.icon,
        isDefault: d.isDefault ?? false,
        userId: null,
      })),
      skipDuplicates: true,
    });
  }

  /** Danh sách danh mục: hệ thống + của user, chưa xóa mềm. */
  async findAll(userId: string) {
    return this.prisma.category.findMany({
      where: {
        deletedAt: null,
        OR: [{ userId: null }, { userId }],
      },
      orderBy: [{ isDefault: 'desc' }, { name: 'asc' }],
    });
  }

  /** Tạo danh mục riêng; từ chối nếu trùng tên trong phạm vi user. */
  async create(userId: string, dto: CreateCategoryDto) {
    const duplicate = await this.prisma.category.findFirst({
      where: {
        userId,
        name: dto.name.trim(),
        deletedAt: null,
      },
    });
    if (duplicate) {
      throw new BusinessException(
        ErrorCodes.CAT_BR08,
        'Category name already exists',
        HttpStatus.CONFLICT,
      );
    }

    return this.prisma.category.create({
      data: {
        userId,
        name: dto.name.trim(),
        color: dto.color,
        icon: dto.icon,
        isDefault: false,
      },
    });
  }

  /** Cập nhật danh mục — không cho sửa danh mục isDefault hệ thống. */
  async update(userId: string, id: string, dto: UpdateCategoryDto) {
    const category = await this.prisma.category.findFirst({
      where: { id, userId, deletedAt: null },
    });
    if (!category) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'Category not found',
        HttpStatus.NOT_FOUND,
      );
    }
    if (category.isDefault) {
      throw new BusinessException(
        ErrorCodes.CAT_BR05,
        'Cannot modify system default category',
        HttpStatus.FORBIDDEN,
      );
    }

    if (dto.name) {
      const duplicate = await this.prisma.category.findFirst({
        where: {
          userId,
          name: dto.name.trim(),
          deletedAt: null,
          NOT: { id },
        },
      });
      if (duplicate) {
        throw new BusinessException(
          ErrorCodes.CAT_BR08,
          'Category name already exists',
          HttpStatus.CONFLICT,
        );
      }
    }

    return this.prisma.category.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name.trim() }),
        ...(dto.color !== undefined && { color: dto.color }),
        ...(dto.icon !== undefined && { icon: dto.icon }),
      },
    });
  }

  /**
   * Xóa mềm danh mục; gán lại habit sang danh mục "Khác" trong transaction.
   */
  async remove(userId: string, id: string) {
    const category = await this.prisma.category.findFirst({
      where: { id, userId, deletedAt: null },
    });
    if (!category) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'Category not found',
        HttpStatus.NOT_FOUND,
      );
    }
    if (category.isDefault) {
      throw new BusinessException(
        ErrorCodes.CAT_BR05,
        'Cannot delete system default category',
        HttpStatus.FORBIDDEN,
      );
    }

    const fallback = await this.prisma.category.findFirst({
      where: { name: DEFAULT_CATEGORY_NAME, userId: null, isDefault: true },
    });

    await this.prisma.$transaction([
      this.prisma.habit.updateMany({
        where: { categoryId: id, userId },
        data: { categoryId: fallback?.id ?? null },
      }),
      this.prisma.category.update({
        where: { id },
        data: { deletedAt: new Date() },
      }),
    ]);

    return { message: 'Category deleted. Habits moved to default category.' };
  }

  /** Trả id danh mục "Khác" — dùng khi tạo habit không chọn category. */
  async getDefaultCategoryId(): Promise<string | null> {
    const cat = await this.prisma.category.findFirst({
      where: { name: DEFAULT_CATEGORY_NAME, userId: null, isDefault: true },
    });
    return cat?.id ?? null;
  }
}
