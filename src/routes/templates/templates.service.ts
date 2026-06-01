/**
 * Service mẫu thói quen: duyệt template công khai, import tạo habit + schedule + streak.
 * Ghi nhận userImportedTemplate để không trùng lặp đếm import (vẫn cho import lại habit).
 */
import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { BusinessException } from 'src/common/exceptions/business.exception';
import { ErrorCodes } from 'src/common/constants/error-codes';
import { HabitStatus } from 'src/generated/prisma/enums';

@Injectable()
export class TemplatesService {
  constructor(private readonly prisma: PrismaService) {}

  /** Liệt kê template public, lọc difficulty và isFeatured. */
  async findAll(filters?: { difficulty?: string; featured?: boolean }) {
    return this.prisma.celebrityHabitTemplate.findMany({
      where: {
        deletedAt: null,
        isPublic: true,
        ...(filters?.difficulty && {
          difficulty: filters.difficulty as never,
        }),
        ...(filters?.featured !== undefined && {
          isFeatured: filters.featured,
        }),
      },
      include: {
        category: true,
        items: { where: { deletedAt: null }, orderBy: { displayOrder: 'asc' } },
        _count: { select: { importedByUsers: true } },
      },
      orderBy: [{ isFeatured: 'desc' }, { createdAt: 'desc' }],
    });
  }

  /** Chi tiết template — 404 nếu không public hoặc đã xóa. */
  async findOne(id: string) {
    const template = await this.prisma.celebrityHabitTemplate.findFirst({
      where: { id, deletedAt: null, isPublic: true },
      include: {
        category: true,
        items: { where: { deletedAt: null }, orderBy: { displayOrder: 'asc' } },
      },
    });
    if (!template) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'Template not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return template;
  }

  /**
   * Import: với mỗi item tạo habit, schedule, streak;
   * ghi userImportedTemplate lần đầu.
   */
  async importTemplate(userId: string, templateId: string) {
    const template = await this.findOne(templateId);

    const existingImport = await this.prisma.userImportedTemplate.findUnique({
      where: {
        userId_templateId: { userId, templateId },
      },
    });

    const createdHabits = await this.prisma.$transaction(async (tx) => {
      if (!existingImport) {
        await tx.userImportedTemplate.create({
          data: { userId, templateId },
        });
      }

      const habits: { id: string; name: string }[] = [];
      for (const item of template.items) {
        const habit = await tx.habit.create({
          data: {
            userId,
            categoryId: template.categoryId,
            name: item.name,
            description: item.description,
            goalType: item.goalType,
            goalValue: item.goalValue,
            goalUnit: item.goalUnit,
            status: HabitStatus.active,
            startDate: new Date(),
          },
        });

        await tx.schedule.create({
          data: {
            habitId: habit.id,
            repeatType: item.repeatType,
            repeatConfig: item.repeatConfig ?? undefined,
          },
        });

        await tx.streak.create({
          data: { habitId: habit.id, userId },
        });

        habits.push({ id: habit.id, name: habit.name });
      }
      return habits;
    });

    return {
      templateId,
      importedCount: createdHabits.length,
      habits: createdHabits,
    };
  }
}
