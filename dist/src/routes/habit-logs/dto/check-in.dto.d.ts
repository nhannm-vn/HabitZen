import { HabitLogStatus } from "../../../generated/prisma/enums";
export declare class CheckInDto {
    habitId: string;
    logDate?: string;
    progressValue?: number;
    note?: string;
    status?: HabitLogStatus;
}
export declare class UpdateHabitLogDto {
    progressValue?: number;
    note?: string;
    status?: HabitLogStatus;
}
export declare class HabitLogQueryDto {
    habitId?: string;
    from?: string;
    to?: string;
    date?: string;
}
