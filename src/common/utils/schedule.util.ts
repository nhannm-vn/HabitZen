/**
 * Logic lịch lặp lại (Schedule) — quyết định ngày nào habit "cần làm".
 *
 * Rule cốt lõi (SCH_BR02, SCH_BR03):
 * - Chỉ ngày thuộc lịch mới tính missed / hiển thị dashboard.
 * - Ngày không có lịch KHÔNG làm mất streak.
 */
import { ScheduleRepeatType } from 'src/generated/prisma/enums';
import {
  getDayOfMonth,
  getIsoWeekday,
  parseDateKey,
  toDateKey,
} from './date.util';

/** Cấu hình JSON lưu trong bảng schedules.repeat_config */
export interface RepeatConfig {
  daysOfWeek?: number[];
  daysOfMonth?: number[];
  intervalDays?: number;
}

/** Kiểm tra dateKey có nằm trong khoảng startDate–endDate của habit không */
export function isHabitInTrackingPeriod(
  dateKey: string,
  startDate: Date,
  endDate: Date | null,
): boolean {
  const start = startDate.toISOString().slice(0, 10);
  if (dateKey < start) return false;
  if (endDate) {
    const end = endDate.toISOString().slice(0, 10);
    if (dateKey > end) return false;
  }
  return true;
}

/** Ngày `dateKey` có nằm trong lịch lặp không (chưa tính custom interval từ start) */
export function isScheduledOnDate(
  repeatType: ScheduleRepeatType,
  repeatConfig: RepeatConfig | null,
  dateKey: string,
): boolean {
  switch (repeatType) {
    case ScheduleRepeatType.daily:
      return true;
    case ScheduleRepeatType.weekly: {
      const days = repeatConfig?.daysOfWeek ?? [];
      if (days.length === 0) return false;
      return days.includes(getIsoWeekday(dateKey));
    }
    case ScheduleRepeatType.monthly: {
      const days = repeatConfig?.daysOfMonth ?? [];
      if (days.length === 0) return false;
      return days.includes(getDayOfMonth(dateKey));
    }
    case ScheduleRepeatType.custom:
      return true;
    default:
      return false;
  }
}

/**
 * Giống isScheduledOnDate nhưng với custom: mỗi N ngày kể từ startDate habit.
 * VD: intervalDays=2, start 01/05 → làm ngày 01, 03, 05...
 */
export function isScheduledOnDateWithStart(
  repeatType: ScheduleRepeatType,
  repeatConfig: RepeatConfig | null,
  dateKey: string,
  habitStartDate: Date,
): boolean {
  if (repeatType === ScheduleRepeatType.custom) {
    const interval = repeatConfig?.intervalDays ?? 1;
    const startKey = habitStartDate.toISOString().slice(0, 10);
    const diffMs =
      parseDateKey(dateKey).getTime() - parseDateKey(startKey).getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return false;
    return diffDays % interval === 0;
  }
  return isScheduledOnDate(repeatType, repeatConfig, dateKey);
}

/** dateKey "hôm nay" theo timezone user */
export function todayKey(timezone: string): string {
  return toDateKey(new Date(), timezone);
}
