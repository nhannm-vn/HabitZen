/**
 * Service nhật ký thói quen: check-in, skip, cập nhật, xử lý missed.
 * Sau mỗi thay đổi log gọi StreakService.recalculateForHabit.
 */
import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { OwnershipService } from 'src/shared/services/ownership.service';
import { StreakService } from 'src/shared/services/streak.service';
import { BusinessException } from 'src/common/exceptions/business.exception';
import { ErrorCodes } from 'src/common/constants/error-codes';
import { HabitLogStatus, HabitStatus } from 'src/generated/prisma/enums';
import {
  isHabitInTrackingPeriod,
  isScheduledOnDateWithStart,
  RepeatConfig,
  todayKey,
} from 'src/common/utils/schedule.util';
import { resolveLogStatus } from 'src/common/utils/log-status.util';
import { addDays } from 'src/common/utils/date.util';
import { CheckInDto, UpdateHabitLogDto } from './dto/check-in.dto';

@Injectable()
export class HabitLogsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ownership: OwnershipService,
    private readonly streakService: StreakService,
  ) {}

  /**
   * Liệt kê log của user — lọc theo habitId, một ngày, hoặc khoảng from/to.
   */
  async findAll(
    userId: string,
    filters: { habitId?: string; from?: string; to?: string; date?: string },
  ) {
    const logDateFilter = filters.date
      ? { equals: new Date(filters.date) }
      : filters.from || filters.to
        ? {
            ...(filters.from && { gte: new Date(filters.from) }),
            ...(filters.to && { lte: new Date(filters.to) }),
          }
        : undefined;

    return this.prisma.habitLog.findMany({
      where: {
        userId,
        deletedAt: null,
        ...(filters.habitId && { habitId: filters.habitId }),
        ...(logDateFilter && { logDate: logDateFilter }),
      },
      include: { habit: { select: { id: true, name: true, goalType: true } } },
      orderBy: { logDate: 'desc' },
    });
  }

  /**
   * Kiểm tra habit active, có schedule, trong khoảng theo dõi và có lịch vào dateKey.
   */
  private async assertScheduledToday(
    habitId: string,
    userId: string,
    dateKey: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    timezone: string,
  ) {
    const habit = await this.prisma.habit.findFirst({
      where: { id: habitId, userId, deletedAt: null },
      include: { schedule: true },
    });

    if (!habit || habit.status !== HabitStatus.active) {
      throw new BusinessException(
        ErrorCodes.LOG_BR02,
        'Habit is not active or not found',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!habit.schedule) {
      throw new BusinessException(
        ErrorCodes.LOG_BR02,
        'Habit has no schedule',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!isHabitInTrackingPeriod(dateKey, habit.startDate, habit.endDate)) {
      throw new BusinessException(
        ErrorCodes.LOG_BR02,
        'Habit is not in tracking period for this date',
        HttpStatus.BAD_REQUEST,
      );
    }

    const scheduled = isScheduledOnDateWithStart(
      habit.schedule.repeatType,
      habit.schedule.repeatConfig as RepeatConfig | null,
      dateKey,
      habit.startDate,
    );

    if (!scheduled) {
      throw new BusinessException(
        ErrorCodes.LOG_BR02,
        'This habit is not scheduled for the selected date',
        HttpStatus.BAD_REQUEST,
      );
    }

    return habit;
  }

  /**
   * Check-in: upsert log theo habitId + logDate, suy trạng thái từ goal, tính lại streak.
   */
  async checkIn(userId: string, timezone: string, dto: CheckInDto) {
    const dateKey = dto.logDate ?? todayKey(timezone);
    const habit = await this.assertScheduledToday(
      dto.habitId,
      userId,
      dateKey,
      timezone,
    );

    const status = resolveLogStatus(
      habit.goalType,
      habit.goalValue,
      dto.progressValue ?? null,
      dto.status,
    );

    const log = await this.prisma.habitLog.upsert({
      where: {
        habitId_logDate: {
          habitId: dto.habitId,
          logDate: new Date(dateKey),
        },
      },
      create: {
        habitId: dto.habitId,
        userId,
        logDate: new Date(dateKey),
        status,
        progressValue: dto.progressValue,
        note: dto.note,
        checkedInAt: new Date(),
      },
      update: {
        status,
        progressValue: dto.progressValue,
        note: dto.note,
        checkedInAt: new Date(),
      },
    });

    await this.streakService.recalculateForHabit(dto.habitId, userId);
    return log;
  }

  /** Đánh dấu skipped cho ngày có lịch. */
  async skip(
    userId: string,
    timezone: string,
    habitId: string,
    logDate?: string,
  ) {
    const dateKey = logDate ?? todayKey(timezone);
    await this.assertScheduledToday(habitId, userId, dateKey, timezone);

    const log = await this.prisma.habitLog.upsert({
      where: {
        habitId_logDate: { habitId, logDate: new Date(dateKey) },
      },
      create: {
        habitId,
        userId,
        logDate: new Date(dateKey),
        status: HabitLogStatus.skipped,
        checkedInAt: new Date(),
      },
      update: {
        status: HabitLogStatus.skipped,
        checkedInAt: new Date(),
      },
    });

    await this.streakService.recalculateForHabit(habitId, userId);
    return log;
  }

  /** Cập nhật log đã có — kiểm tra ownership qua userId trên bản ghi log. */
  async updateLog(userId: string, id: string, dto: UpdateHabitLogDto) {
    const existing = await this.prisma.habitLog.findFirst({
      where: { id, userId, deletedAt: null },
      include: { habit: true },
    });
    if (!existing) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'Log not found',
        HttpStatus.NOT_FOUND,
      );
    }

    const status =
      dto.status ??
      resolveLogStatus(
        existing.habit.goalType,
        existing.habit.goalValue,
        dto.progressValue ?? existing.progressValue,
        dto.status,
      );

    const log = await this.prisma.habitLog.update({
      where: { id },
      data: {
        ...(dto.progressValue !== undefined && {
          progressValue: dto.progressValue,
        }),
        ...(dto.note !== undefined && { note: dto.note }),
        status,
        checkedInAt: new Date(),
      },
    });

    await this.streakService.recalculateForHabit(existing.habitId, userId);
    return log;
  }

  /**
   * Job xử lý ngày quá hạn: pending -> missed; tạo missed cho ngày có lịch nhưng chưa có log.
   */
  async processMissed(userId: string, timezone: string) {
    const today = todayKey(timezone);
    const habits = await this.prisma.habit.findMany({
      where: { userId, deletedAt: null, status: HabitStatus.active },
      include: { schedule: true },
    });

    let updated = 0;
    for (const habit of habits) {
      if (!habit.schedule) continue;

      // Cập nhật log pending trước hôm nay thành missed nếu vẫn có lịch
      const pendingLogs = await this.prisma.habitLog.findMany({
        where: {
          habitId: habit.id,
          userId,
          status: HabitLogStatus.pending,
          logDate: { lt: new Date(today) },
          deletedAt: null,
        },
      });

      for (const log of pendingLogs) {
        const dateKey = log.logDate.toISOString().slice(0, 10);
        const scheduled = isScheduledOnDateWithStart(
          habit.schedule.repeatType,
          habit.schedule.repeatConfig as RepeatConfig | null,
          dateKey,
          habit.startDate,
        );
        if (scheduled) {
          await this.prisma.habitLog.update({
            where: { id: log.id },
            data: { status: HabitLogStatus.missed },
          });
          updated += 1;
        }
      }

      // Tạo bản ghi missed cho các ngày có lịch nhưng chưa có log
      let cursor = habit.startDate.toISOString().slice(0, 10);
      while (cursor < today) {
        if (
          isHabitInTrackingPeriod(cursor, habit.startDate, habit.endDate) &&
          isScheduledOnDateWithStart(
            habit.schedule.repeatType,
            habit.schedule.repeatConfig as RepeatConfig | null,
            cursor,
            habit.startDate,
          )
        ) {
          const existing = await this.prisma.habitLog.findUnique({
            where: {
              habitId_logDate: {
                habitId: habit.id,
                logDate: new Date(cursor),
              },
            },
          });
          if (!existing) {
            await this.prisma.habitLog.create({
              data: {
                habitId: habit.id,
                userId,
                logDate: new Date(cursor),
                status: HabitLogStatus.missed,
              },
            });
            updated += 1;
          }
        }
        cursor = addDays(cursor, 1);
      }

      await this.streakService.recalculateForHabit(habit.id, userId);
    }

    return { processed: updated };
  }
}
