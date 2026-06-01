/**
 * Service thống kê: đếm ngày có lịch vs trạng thái log trong khoảng,
 * tỷ lệ hoàn thành, tổng quan hôm nay/tuần và streak.
 */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { HabitLogStatus, HabitStatus } from 'src/generated/prisma/enums';
import { dateKeyRange, toDateKey } from 'src/common/utils/date.util';
import {
  isHabitInTrackingPeriod,
  isScheduledOnDateWithStart,
  RepeatConfig,
  todayKey,
} from 'src/common/utils/schedule.util';

@Injectable()
export class StatisticsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Tính số ngày scheduled và phân bổ theo status log trong [fromKey, toKey].
   * @param habitId — nếu có, chỉ tính cho một habit
   */
  private async computePeriodStats(
    userId: string,
    fromKey: string,
    toKey: string,
    habitId?: string,
  ) {
    const habits = await this.prisma.habit.findMany({
      where: {
        userId,
        deletedAt: null,
        ...(habitId && { id: habitId }),
      },
      include: { schedule: true },
    });

    const logs = await this.prisma.habitLog.findMany({
      where: {
        userId,
        deletedAt: null,
        logDate: { gte: new Date(fromKey), lte: new Date(toKey) },
        ...(habitId && { habitId }),
      },
    });

    const logMap = new Map<string, HabitLogStatus>();
    for (const log of logs) {
      const key = `${log.habitId}:${log.logDate.toISOString().slice(0, 10)}`;
      logMap.set(key, log.status);
    }

    let scheduled = 0;
    let completed = 0;
    let partial = 0;
    let missed = 0;
    let skipped = 0;
    let pending = 0;

    const dateKeys = dateKeyRange(fromKey, toKey);

    for (const habit of habits) {
      if (!habit.schedule) continue;
      for (const dk of dateKeys) {
        if (!isHabitInTrackingPeriod(dk, habit.startDate, habit.endDate)) {
          continue;
        }
        const isSched = isScheduledOnDateWithStart(
          habit.schedule.repeatType,
          habit.schedule.repeatConfig as RepeatConfig | null,
          dk,
          habit.startDate,
        );
        if (!isSched) continue;

        scheduled += 1;
        const status =
          logMap.get(`${habit.id}:${dk}`) ?? HabitLogStatus.pending;

        switch (status) {
          case HabitLogStatus.completed:
            completed += 1;
            break;
          case HabitLogStatus.partial:
            partial += 1;
            break;
          case HabitLogStatus.missed:
            missed += 1;
            break;
          case HabitLogStatus.skipped:
            skipped += 1;
            break;
          case HabitLogStatus.pending:
            pending += 1;
            break;
        }
      }
    }

    const completionRate =
      scheduled > 0 ? Math.round((completed / scheduled) * 10000) / 100 : 0;

    return {
      from: fromKey,
      to: toKey,
      scheduled,
      completed,
      partial,
      missed,
      skipped,
      pending,
      completionRate,
    };
  }

  /** Tổng quan: số habit active, stats hôm nay, tuần (Thứ 2–CN), danh sách streak. */
  async getOverview(userId: string, timezone: string) {
    const today = todayKey(timezone);
    const activeHabits = await this.prisma.habit.count({
      where: { userId, deletedAt: null, status: HabitStatus.active },
    });

    const todayStats = await this.computePeriodStats(userId, today, today);

    const streaks = await this.prisma.streak.findMany({
      where: { userId, deletedAt: null },
      include: { habit: { select: { id: true, name: true, status: true } } },
      orderBy: { currentStreak: 'desc' },
    });

    const best = streaks
      .filter((s) => s.habit.status === HabitStatus.active)
      .sort((a, b) => b.currentStreak - a.currentStreak)[0];

    const weekStart = this.getWeekStart(today);
    const weekStats = await this.computePeriodStats(userId, weekStart, today);

    return {
      activeHabits,
      today: todayStats,
      thisWeek: weekStats,
      topStreak: best
        ? {
            habitId: best.habitId,
            habitName: best.habit.name,
            currentStreak: best.currentStreak,
            longestStreak: best.longestStreak,
          }
        : null,
      streaks: streaks.map((s) => ({
        habitId: s.habitId,
        habitName: s.habit.name,
        currentStreak: s.currentStreak,
        longestStreak: s.longestStreak,
        lastCompletedDate: s.lastCompletedDate,
      })),
    };
  }

  /** Thống kê toàn bộ habit (hoặc một habit) trong khoảng ngày. */
  async getByPeriod(
    userId: string,
    from: string,
    to: string,
    habitId?: string,
  ) {
    return this.computePeriodStats(userId, from, to, habitId);
  }

  /** Thống kê chi tiết một habit kèm bản ghi streak. */
  async getHabitStats(
    userId: string,
    habitId: string,
    from: string,
    to: string,
  ) {
    const habit = await this.prisma.habit.findFirst({
      where: { id: habitId, userId, deletedAt: null },
      include: { streak: true },
    });
    if (!habit) return null;

    const period = await this.computePeriodStats(userId, from, to, habitId);
    return {
      habit: { id: habit.id, name: habit.name },
      streak: habit.streak,
      period,
    };
  }

  /** Ngày đầu tuần (Thứ 2) theo UTC từ dateKey. */
  private getWeekStart(dateKey: string): string {
    const d = new Date(dateKey + 'T00:00:00Z');
    const day = d.getUTCDay();
    const diff = day === 0 ? 6 : day - 1;
    d.setUTCDate(d.getUTCDate() - diff);
    return toDateKey(d, 'UTC');
  }
}
