/**
 * Service nhắc nhở: CRUD theo habit, parse giờ UTC, API due cho push notification.
 */
import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { OwnershipService } from 'src/shared/services/ownership.service';
import { BusinessException } from 'src/common/exceptions/business.exception';
import { ErrorCodes } from 'src/common/constants/error-codes';
import { HabitLogStatus, HabitStatus } from 'src/generated/prisma/enums';
import {
  isHabitInTrackingPeriod,
  isScheduledOnDateWithStart,
  RepeatConfig,
  todayKey,
} from 'src/common/utils/schedule.util';
import { CreateReminderDto, UpdateReminderDto } from './dto/reminder.dto';

@Injectable()
export class RemindersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ownership: OwnershipService,
  ) {}

  /** Chuyển chuỗi HH:mm(:ss) thành Date UTC chỉ chứa phần giờ (lưu remindAt). */
  private parseTime(time: string): Date {
    const parts = time.split(':').map(Number);
    const d = new Date(0);
    d.setUTCHours(parts[0], parts[1], parts[2] ?? 0, 0);
    return d;
  }

  /** Liệt kê reminder của habit sau khi xác minh sở hữu. */
  async findByHabit(userId: string, habitId: string) {
    await this.ownership.assertHabitOwner(habitId, userId);
    return this.prisma.reminder.findMany({
      where: { habitId, userId, deletedAt: null },
      orderBy: { remindAt: 'asc' },
    });
  }

  /** Tạo reminder mới cho habit. */
  async create(userId: string, habitId: string, dto: CreateReminderDto) {
    await this.ownership.assertHabitOwner(habitId, userId);
    return this.prisma.reminder.create({
      data: {
        habitId,
        userId,
        remindAt: this.parseTime(dto.remindAt),
        isEnabled: dto.isEnabled ?? true,
      },
    });
  }

  /** Cập nhật giờ hoặc trạng thái bật/tắt. */
  async update(userId: string, id: string, dto: UpdateReminderDto) {
    const reminder = await this.prisma.reminder.findFirst({
      where: { id, userId, deletedAt: null },
    });
    if (!reminder) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'Reminder not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return this.prisma.reminder.update({
      where: { id },
      data: {
        ...(dto.remindAt !== undefined && {
          remindAt: this.parseTime(dto.remindAt),
        }),
        ...(dto.isEnabled !== undefined && { isEnabled: dto.isEnabled }),
      },
    });
  }

  /** Xóa mềm reminder. */
  async remove(userId: string, id: string) {
    const reminder = await this.prisma.reminder.findFirst({
      where: { id, userId, deletedAt: null },
    });
    if (!reminder) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'Reminder not found',
        HttpStatus.NOT_FOUND,
      );
    }
    await this.prisma.reminder.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    return { message: 'Reminder deleted' };
  }

  /**
   * Cho mobile push scheduler: habit cần nhắc trong ngày hôm nay.
   * Lọc: có lịch, trong khoảng theo dõi, chưa completed, có ít nhất một reminder bật.
   */
  async getDueReminders(userId: string, timezone: string) {
    const dateKey = todayKey(timezone);
    const habits = await this.prisma.habit.findMany({
      where: { userId, deletedAt: null, status: HabitStatus.active },
      include: {
        schedule: true,
        reminders: { where: { deletedAt: null, isEnabled: true } },
        logs: {
          where: {
            logDate: new Date(dateKey),
            deletedAt: null,
          },
        },
      },
    });

    return habits
      .filter((habit) => {
        if (!habit.schedule) return false;
        if (!isHabitInTrackingPeriod(dateKey, habit.startDate, habit.endDate)) {
          return false;
        }
        const scheduled = isScheduledOnDateWithStart(
          habit.schedule.repeatType,
          habit.schedule.repeatConfig as RepeatConfig | null,
          dateKey,
          habit.startDate,
        );
        if (!scheduled) return false;

        const log = habit.logs[0];
        if (log?.status === HabitLogStatus.completed) return false;

        return habit.reminders.length > 0;
      })
      .map((habit) => ({
        habitId: habit.id,
        habitName: habit.name,
        reminders: habit.reminders.map((r) => ({
          id: r.id,
          remindAt: r.remindAt,
        })),
      }));
  }
}
