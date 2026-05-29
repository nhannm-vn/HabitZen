import { PrismaService } from './prisma.service';
export declare class StreakService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    recalculateForHabit(habitId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        habitId: string;
        currentStreak: number;
        longestStreak: number;
        lastCompletedDate: Date | null;
    } | null>;
}
