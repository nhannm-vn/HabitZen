/**
 * Service tính toán và lưu chuỗi ngày hoàn thành (streak) cho thói quen.
 * Dựa trên lịch lặp, khoảng theo dõi và nhật ký check-in;
 * cập nhật bản ghi streak sau mỗi thay đổi log liên quan.
 */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {
  isHabitInTrackingPeriod,
  isScheduledOnDateWithStart,
  RepeatConfig,
} from 'src/common/utils/schedule.util';
import { calculateStreaks, StreakLogEntry } from 'src/common/utils/streak.util';
import { HabitLogStatus } from 'src/generated/prisma/enums';
import { dateKeyRange } from 'src/common/utils/date.util';

/** Tính lại current/longest streak và upsert vào bảng streak. */
@Injectable()
export class StreakService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Tính lại streak cho một thói quen của người dùng.
   * @returns Bản ghi streak sau upsert, hoặc null nếu habit/schedule không tồn tại
   */
  async recalculateForHabit(habitId: string, userId: string) {
    const habit = await this.prisma.habit.findFirst({
      where: { id: habitId, userId, deletedAt: null },
      include: { schedule: true },
    });
    if (!habit || !habit.schedule) return null;

    const logs = await this.prisma.habitLog.findMany({
      where: { habitId, userId, deletedAt: null },
      orderBy: { logDate: 'asc' },
    });

    const repeatConfig = habit.schedule.repeatConfig as RepeatConfig | null;
    const fromKey = habit.startDate.toISOString().slice(0, 10);
    const toKey = new Date().toISOString().slice(0, 10);
    const dateKeys = dateKeyRange(fromKey, toKey);

    // Map ngày -> trạng thái log để tra cứu nhanh
    const logMap = new Map(
      logs.map((l) => [l.logDate.toISOString().slice(0, 10), l.status]),
    );

    // Chỉ xét các ngày có lịch và nằm trong khoảng theo dõi của habit
    const entries: StreakLogEntry[] = dateKeys
      .filter((dk) =>
        isHabitInTrackingPeriod(dk, habit.startDate, habit.endDate),
      )
      .map((dk) => {
        const isScheduled = isScheduledOnDateWithStart(
          habit.schedule!.repeatType,
          repeatConfig,
          dk,
          habit.startDate,
        );
        return {
          logDate: dk,
          status: logMap.get(dk) ?? HabitLogStatus.pending,
          isScheduled,
        };
      })
      .filter((e) => e.isScheduled);

    const { currentStreak, longestStreak, lastCompletedDate } =
      calculateStreaks(entries);

    const existing = await this.prisma.streak.findUnique({
      where: { habitId },
    });
    // Giữ kỷ lục dài nhất từ trước nếu lớn hơn lần tính hiện tại
    const newLongest = Math.max(longestStreak, existing?.longestStreak ?? 0);

    const streak = await this.prisma.streak.upsert({
      where: { habitId },
      create: {
        habitId,
        userId,
        currentStreak,
        longestStreak: newLongest,
        lastCompletedDate: lastCompletedDate
          ? new Date(lastCompletedDate)
          : null,
      },
      update: {
        currentStreak,
        longestStreak: newLongest,
        lastCompletedDate: lastCompletedDate
          ? new Date(lastCompletedDate)
          : null,
      },
    });

    return streak;
  }
}
