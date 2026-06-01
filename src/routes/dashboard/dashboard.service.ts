/**
 * Service dashboard "hôm nay": lọc habit active có lịch trong ngày,
 * tự tạo log pending nếu chưa có, trả summary theo trạng thái log.
 */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { HabitLogStatus, HabitStatus } from 'src/generated/prisma/enums';
import {
  isHabitInTrackingPeriod,
  isScheduledOnDateWithStart,
  RepeatConfig,
  todayKey,
} from 'src/common/utils/schedule.util';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Lấy danh sách habit + log cho một ngày (dateKey).
   * @param date — tùy chọn; mặc định todayKey(timezone)
   */
  async getToday(userId: string, timezone: string, date?: string) {
    const dateKey = date ?? todayKey(timezone);

    const habits = await this.prisma.habit.findMany({
      where: {
        userId,
        deletedAt: null,
        status: HabitStatus.active,
      },
      include: {
        category: true,
        schedule: true,
        streak: true,
        reminders: { where: { deletedAt: null, isEnabled: true } },
      },
    });

    const todayHabits: Array<{
      habit: Record<string, unknown>;
      log: Record<string, unknown>;
    }> = [];

    for (const habit of habits) {
      if (!habit.schedule) continue;
      if (!isHabitInTrackingPeriod(dateKey, habit.startDate, habit.endDate)) {
        continue;
      }

      const isScheduled = isScheduledOnDateWithStart(
        habit.schedule.repeatType,
        habit.schedule.repeatConfig as RepeatConfig | null,
        dateKey,
        habit.startDate,
      );

      if (!isScheduled) continue;

      let log = await this.prisma.habitLog.findUnique({
        where: {
          habitId_logDate: {
            habitId: habit.id,
            logDate: new Date(dateKey),
          },
        },
      });

      // Tạo log pending để UI luôn có bản ghi cho ngày có lịch
      if (!log) {
        log = await this.prisma.habitLog.create({
          data: {
            habitId: habit.id,
            userId,
            logDate: new Date(dateKey),
            status: HabitLogStatus.pending,
          },
        });
      }

      todayHabits.push({
        habit: {
          id: habit.id,
          name: habit.name,
          description: habit.description,
          goalType: habit.goalType,
          goalValue: habit.goalValue,
          goalUnit: habit.goalUnit,
          category: habit.category,
          streak: habit.streak,
          reminders: habit.reminders,
        },
        log: {
          id: log.id,
          status: log.status,
          progressValue: log.progressValue,
          note: log.note,
          checkedInAt: log.checkedInAt,
          logDate: log.logDate,
        },
      });
    }

    const summary = {
      total: todayHabits.length,
      completed: todayHabits.filter(
        (h) => h.log.status === HabitLogStatus.completed,
      ).length,
      pending: todayHabits.filter(
        (h) => h.log.status === HabitLogStatus.pending,
      ).length,
      partial: todayHabits.filter(
        (h) => h.log.status === HabitLogStatus.partial,
      ).length,
      skipped: todayHabits.filter(
        (h) => h.log.status === HabitLogStatus.skipped,
      ).length,
    };

    return { date: dateKey, summary, habits: todayHabits };
  }
}
