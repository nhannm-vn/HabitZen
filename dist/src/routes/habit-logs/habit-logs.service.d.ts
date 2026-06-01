import { PrismaService } from "../../shared/services/prisma.service";
import { OwnershipService } from "../../shared/services/ownership.service";
import { StreakService } from "../../shared/services/streak.service";
import { HabitLogStatus } from "../../generated/prisma/enums";
import { CheckInDto, UpdateHabitLogDto } from './dto/check-in.dto';
export declare class HabitLogsService {
    private readonly prisma;
    private readonly ownership;
    private readonly streakService;
    constructor(prisma: PrismaService, ownership: OwnershipService, streakService: StreakService);
    findAll(userId: string, filters: {
        habitId?: string;
        from?: string;
        to?: string;
        date?: string;
    }): Promise<({
        habit: {
            id: string;
            name: string;
            goalType: import("src/generated/prisma/enums").HabitGoalType;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        status: HabitLogStatus;
        habitId: string;
        logDate: Date;
        progressValue: number | null;
        note: string | null;
        checkedInAt: Date | null;
    })[]>;
    private assertScheduledToday;
    checkIn(userId: string, timezone: string, dto: CheckInDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        status: HabitLogStatus;
        habitId: string;
        logDate: Date;
        progressValue: number | null;
        note: string | null;
        checkedInAt: Date | null;
    }>;
    skip(userId: string, timezone: string, habitId: string, logDate?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        status: HabitLogStatus;
        habitId: string;
        logDate: Date;
        progressValue: number | null;
        note: string | null;
        checkedInAt: Date | null;
    }>;
    updateLog(userId: string, id: string, dto: UpdateHabitLogDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        status: HabitLogStatus;
        habitId: string;
        logDate: Date;
        progressValue: number | null;
        note: string | null;
        checkedInAt: Date | null;
    }>;
    processMissed(userId: string, timezone: string): Promise<{
        processed: number;
    }>;
}
