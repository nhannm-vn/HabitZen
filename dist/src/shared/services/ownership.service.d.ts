import { PrismaService } from './prisma.service';
export declare class OwnershipService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    assertHabitOwner(habitId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        name: string;
        categoryId: string | null;
        description: string | null;
        goalType: import("../../generated/prisma/enums").HabitGoalType;
        goalValue: number | null;
        goalUnit: string | null;
        status: import("../../generated/prisma/enums").HabitStatus;
        startDate: Date;
        endDate: Date | null;
    }>;
    assertCategoryAccess(categoryId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string | null;
        name: string;
        color: string | null;
        icon: string | null;
        isDefault: boolean;
    }>;
}
