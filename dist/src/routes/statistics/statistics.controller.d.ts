import { RequestUser } from "../../common/interfaces/request-user.interface";
import { StatisticsService } from './statistics.service';
declare class StatsQueryDto {
    from?: string;
    to?: string;
}
export declare class StatisticsController {
    private readonly statisticsService;
    constructor(statisticsService: StatisticsService);
    overview(user: RequestUser): Promise<{
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
    period(user: RequestUser, query: StatsQueryDto): Promise<{
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
    habitStats(user: RequestUser, habitId: string, query: StatsQueryDto): Promise<{
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
}
export {};
