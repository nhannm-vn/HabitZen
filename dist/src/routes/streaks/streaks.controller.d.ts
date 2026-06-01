import { PrismaService } from "../../shared/services/prisma.service";
import { StreakService } from "../../shared/services/streak.service";
import { RequestUser } from "../../common/interfaces/request-user.interface";
import { OwnershipService } from "../../shared/services/ownership.service";
export declare class StreaksController {
    private readonly prisma;
    private readonly streakService;
    private readonly ownership;
    constructor(prisma: PrismaService, streakService: StreakService, ownership: OwnershipService);
    findAll(user: RequestUser): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        habit: {
            id: string;
            name: string;
            status: import("../../generated/prisma/enums").HabitStatus;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        habitId: string;
        currentStreak: number;
        longestStreak: number;
        lastCompletedDate: Date | null;
    })[]>;
    findByHabit(user: RequestUser, habitId: string): Promise<({
        habit: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        habitId: string;
        currentStreak: number;
        longestStreak: number;
        lastCompletedDate: Date | null;
    }) | null>;
}
