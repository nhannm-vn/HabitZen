import { HabitLogStatus } from "../../generated/prisma/enums";
export interface StreakLogEntry {
    logDate: string;
    status: HabitLogStatus;
    isScheduled: boolean;
}
export declare function calculateStreaks(entries: StreakLogEntry[]): {
    currentStreak: number;
    longestStreak: number;
    lastCompletedDate: string | null;
};
