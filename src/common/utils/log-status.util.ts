/**
 * Tính trạng thái HabitLog từ mục tiêu (goalType) và tiến độ (progressValue).
 *
 * Rule LOG_BR04–LOG_BR07:
 * - boolean → completed khi user check-in
 * - count/duration/distance → completed nếu progress >= goalValue
 * - partial nếu 0 < progress < goal
 */
import { HabitGoalType, HabitLogStatus } from 'src/generated/prisma/enums';

export function resolveLogStatus(
  goalType: HabitGoalType,
  goalValue: number | null,
  progressValue: number | null,
  explicitStatus?: HabitLogStatus,
): HabitLogStatus {
  if (explicitStatus === HabitLogStatus.skipped) {
    return HabitLogStatus.skipped;
  }

  if (goalType === HabitGoalType.boolean) {
    return HabitLogStatus.completed;
  }

  const progress = progressValue ?? 0;
  const target = goalValue ?? 0;

  if (target <= 0) {
    return progress > 0 ? HabitLogStatus.completed : HabitLogStatus.partial;
  }

  if (progress >= target) return HabitLogStatus.completed;
  if (progress > 0) return HabitLogStatus.partial;
  return HabitLogStatus.pending;
}
