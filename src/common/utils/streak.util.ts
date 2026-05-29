/**
 * Thuật toán tính streak từ lịch sử log (theo ngày có lịch).
 *
 * Rule STR_BR02–STR_BR07:
 * - completed: tăng chuỗi
 * - missed: reset về 0
 * - skipped: không reset (bỏ qua hợp lệ)
 * - partial/pending: không tăng chuỗi
 * - Ngày không scheduled: bỏ qua hoàn toàn
 */
import { HabitLogStatus } from 'src/generated/prisma/enums';

export interface StreakLogEntry {
  logDate: string;
  status: HabitLogStatus;
  isScheduled: boolean;
}

export function calculateStreaks(entries: StreakLogEntry[]): {
  currentStreak: number;
  longestStreak: number;
  lastCompletedDate: string | null;
} {
  let current = 0;
  let longest = 0;
  let lastCompleted: string | null = null;

  for (const entry of entries) {
    if (!entry.isScheduled) continue;

    if (entry.status === HabitLogStatus.completed) {
      current += 1;
      longest = Math.max(longest, current);
      lastCompleted = entry.logDate;
    } else if (entry.status === HabitLogStatus.missed) {
      current = 0;
    } else if (entry.status === HabitLogStatus.skipped) {
      continue;
    }
  }

  // currentStreak: đếm ngược từ ngày scheduled gần nhất
  const scheduled = entries.filter((e) => e.isScheduled);
  let backward = 0;
  for (let i = scheduled.length - 1; i >= 0; i--) {
    const s = scheduled[i].status;
    if (s === HabitLogStatus.completed) {
      backward += 1;
    } else if (s === HabitLogStatus.skipped) {
      continue;
    } else if (s === HabitLogStatus.missed) {
      break;
    } else if (s === HabitLogStatus.partial || s === HabitLogStatus.pending) {
      break;
    }
  }

  return {
    currentStreak: backward,
    longestStreak: Math.max(longest, backward),
    lastCompletedDate: lastCompleted,
  };
}
