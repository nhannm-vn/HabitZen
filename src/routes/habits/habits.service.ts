/**
 * Service nghiệp vụ thói quen: CRUD, validate lịch, transaction tạo schedule/streak.
 * Dùng OwnershipService để kiểm tra quyền habit và category.
 */
import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { OwnershipService } from 'src/shared/services/ownership.service';
import { BusinessException } from 'src/common/exceptions/business.exception';
import { ErrorCodes } from 'src/common/constants/error-codes';
import { HabitStatus, ScheduleRepeatType } from 'src/generated/prisma/enums';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto, UpdateHabitStatusDto } from './dto/update-habit.dto';
import { ScheduleDto } from './dto/schedule.dto';
import { toJsonValue } from 'src/common/utils/prisma-json.util';

@Injectable()
export class HabitsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ownership: OwnershipService,
  ) {}

  /**
   * Kiểm tra repeatConfig phù hợp với repeatType (weekly/monthly).
   */
  private validateSchedule(dto: ScheduleDto) {
    if (dto.repeatType === ScheduleRepeatType.weekly) {
      if (!dto.repeatConfig?.daysOfWeek?.length) {
        throw new BusinessException(
          ErrorCodes.SCH_BR05,
          'Weekly schedule requires at least one day of week',
        );
      }
    }
    if (dto.repeatType === ScheduleRepeatType.monthly) {
      if (!dto.repeatConfig?.daysOfMonth?.length) {
        throw new BusinessException(
          ErrorCodes.SCH_BR06,
          'Monthly schedule requires at least one day of month',
        );
      }
    }
  }

  /** Cấu hình include Prisma cho response habit đầy đủ. */
  private habitInclude() {
    return {
      category: true,
      schedule: true,
      streak: true,
      reminders: { where: { deletedAt: null } },
    };
  }

  /** Liệt kê habit của user, lọc theo status và categoryId. */
  async findAll(
    userId: string,
    filters?: { status?: HabitStatus; categoryId?: string },
  ) {
    return this.prisma.habit.findMany({
      where: {
        userId,
        deletedAt: null,
        ...(filters?.status && { status: filters.status }),
        ...(filters?.categoryId && { categoryId: filters.categoryId }),
      },
      include: this.habitInclude(),
      orderBy: { createdAt: 'desc' },
    });
  }

  /** Lấy một habit — 404 nếu không thuộc user hoặc đã xóa. */
  async findOne(userId: string, id: string) {
    const habit = await this.prisma.habit.findFirst({
      where: { id, userId, deletedAt: null },
      include: this.habitInclude(),
    });
    if (!habit) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'Habit not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return habit;
  }

  /**
   * Tạo habit trong transaction: habit + schedule + streak khởi tạo.
   */
  async create(userId: string, dto: CreateHabitDto) {
    if (!dto.name?.trim()) {
      throw new BusinessException(
        ErrorCodes.HABIT_BR03,
        'Habit name is required',
      );
    }
    this.validateSchedule(dto.schedule);

    if (dto.categoryId) {
      await this.ownership.assertCategoryAccess(dto.categoryId, userId);
    }

    return this.prisma.$transaction(async (tx) => {
      const habit = await tx.habit.create({
        data: {
          userId,
          name: dto.name.trim(),
          description: dto.description,
          goalType: dto.goalType,
          goalValue: dto.goalValue,
          goalUnit: dto.goalUnit,
          categoryId: dto.categoryId,
          startDate: new Date(dto.startDate),
          endDate: dto.endDate ? new Date(dto.endDate) : null,
          status: HabitStatus.active,
        },
      });

      await tx.schedule.create({
        data: {
          habitId: habit.id,
          repeatType: dto.schedule.repeatType,
          repeatConfig: toJsonValue(
            dto.schedule.repeatConfig as Record<string, unknown> | undefined,
          ),
        },
      });

      await tx.streak.create({
        data: { habitId: habit.id, userId },
      });

      return tx.habit.findUniqueOrThrow({
        where: { id: habit.id },
        include: this.habitInclude(),
      });
    });
  }

  /** Cập nhật thông tin habit; kiểm tra category nếu đổi. */
  async update(userId: string, id: string, dto: UpdateHabitDto) {
    await this.ownership.assertHabitOwner(id, userId);

    if (dto.categoryId) {
      await this.ownership.assertCategoryAccess(dto.categoryId, userId);
    }

    return this.prisma.habit.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name.trim() }),
        ...(dto.description !== undefined && { description: dto.description }),
        ...(dto.goalType !== undefined && { goalType: dto.goalType }),
        ...(dto.goalValue !== undefined && { goalValue: dto.goalValue }),
        ...(dto.goalUnit !== undefined && { goalUnit: dto.goalUnit }),
        ...(dto.categoryId !== undefined && { categoryId: dto.categoryId }),
        ...(dto.startDate !== undefined && {
          startDate: new Date(dto.startDate),
        }),
        ...(dto.endDate !== undefined && {
          endDate: dto.endDate ? new Date(dto.endDate) : null,
        }),
      },
      include: this.habitInclude(),
    });
  }

  /** Đổi trạng thái habit (active/archived). */
  async updateStatus(userId: string, id: string, dto: UpdateHabitStatusDto) {
    await this.ownership.assertHabitOwner(id, userId);
    return this.prisma.habit.update({
      where: { id },
      data: { status: dto.status },
      include: this.habitInclude(),
    });
  }

  /** Upsert lịch lặp cho habit. */
  async updateSchedule(userId: string, habitId: string, dto: ScheduleDto) {
    await this.ownership.assertHabitOwner(habitId, userId);
    this.validateSchedule(dto);

    await this.prisma.schedule.upsert({
      where: { habitId },
      create: {
        habitId,
        repeatType: dto.repeatType,
        repeatConfig: toJsonValue(
          dto.repeatConfig as Record<string, unknown> | undefined,
        ),
      },
      update: {
        repeatType: dto.repeatType,
        repeatConfig: toJsonValue(
          dto.repeatConfig as Record<string, unknown> | undefined,
        ),
      },
    });

    return this.findOne(userId, habitId);
  }

  /** Shortcut archive — gọi updateStatus với archived. */
  async archive(userId: string, id: string) {
    return this.updateStatus(userId, id, { status: HabitStatus.archived });
  }

  /** Xóa mềm và đặt trạng thái archived. */
  async remove(userId: string, id: string) {
    await this.ownership.assertHabitOwner(id, userId);
    await this.prisma.habit.update({
      where: { id },
      data: { deletedAt: new Date(), status: HabitStatus.archived },
    });
    return { message: 'Habit archived (soft deleted)' };
  }
}
