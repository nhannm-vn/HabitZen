import { PrismaService } from "../../shared/services/prisma.service";
export declare class StatisticsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private computePeriodStats;
    getOverview(userId: string, timezone: string): Promise<{
        activeHabits: number;
        today: {
            from: string;
            to: string;
            scheduled: number;
            completed: number;
            partial: number;
            missed: number;
            skipped: number;
            pending: number;
            completionRate: number;
        };
        thisWeek: {
            from: string;
            to: string;
            scheduled: number;
            completed: number;
            partial: number;
            missed: number;
            skipped: number;
            pending: number;
            completionRate: number;
        };
        topStreak: {
            habitId: string;
            habitName: string;
            currentStreak: number;
            longestStreak: number;
        } | null;
        streaks: {
            habitId: string;
            habitName: string;
            currentStreak: number;
            longestStreak: number;
            lastCompletedDate: Date | null;
        }[];
    }>;
    getByPeriod(userId: string, from: string, to: string, habitId?: string): Promise<{
        from: string;
        to: string;
        scheduled: number;
        completed: number;
        partial: number;
        missed: number;
        skipped: number;
        pending: number;
        completionRate: number;
    }>;
    getHabitStats(userId: string, habitId: string, from: string, to: string): Promise<{
        habit: {
            id: string;
            name: string;
        };
        streak: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            userId: string;
            habitId: string;
            currentStreak: number;
            longestStreak: number;
            lastCompletedDate: Date | null;
        } | null;
        period: {
            from: string;
            to: string;
            scheduled: number;
            completed: number;
            partial: number;
            missed: number;
            skipped: number;
            pending: number;
            completionRate: number;
        };
    } | null>;
    private getWeekStart;
}
