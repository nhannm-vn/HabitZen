import { HabitGoalType, HabitLogStatus } from "../../generated/prisma/enums";
export declare function resolveLogStatus(goalType: HabitGoalType, goalValue: number | null, progressValue: number | null, explicitStatus?: HabitLogStatus): HabitLogStatus;
