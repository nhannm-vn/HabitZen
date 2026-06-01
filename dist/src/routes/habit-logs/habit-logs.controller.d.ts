import { CheckInDto, HabitLogQueryDto, UpdateHabitLogDto } from './dto/check-in.dto';
import { RequestUser } from "../../common/interfaces/request-user.interface";
import { HabitLogsService } from './habit-logs.service';
declare class SkipDto {
    logDate?: string;
}
export declare class HabitLogsController {
    private readonly habitLogsService;
    constructor(habitLogsService: HabitLogsService);
    findAll(user: RequestUser, query: HabitLogQueryDto): Promise<({
        habit: {
            id: string;
            name: string;
            goalType: import("../../generated/prisma/enums").HabitGoalType;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        status: import("../../generated/prisma/enums").HabitLogStatus;
        habitId: string;
        logDate: Date;
        progressValue: number | null;
        note: string | null;
        checkedInAt: Date | null;
    })[]>;
    processMissed(user: RequestUser): Promise<{
        processed: number;
    }>;
    checkIn(user: RequestUser, dto: CheckInDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        status: import("../../generated/prisma/enums").HabitLogStatus;
        habitId: string;
        logDate: Date;
        progressValue: number | null;
        note: string | null;
        checkedInAt: Date | null;
    }>;
    skip(user: RequestUser, habitId: string, body: SkipDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        status: import("../../generated/prisma/enums").HabitLogStatus;
        habitId: string;
        logDate: Date;
        progressValue: number | null;
        note: string | null;
        checkedInAt: Date | null;
    }>;
    update(user: RequestUser, id: string, dto: UpdateHabitLogDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        userId: string;
        status: import("../../generated/prisma/enums").HabitLogStatus;
        habitId: string;
        logDate: Date;
        progressValue: number | null;
        note: string | null;
        checkedInAt: Date | null;
    }>;
}
export {};
