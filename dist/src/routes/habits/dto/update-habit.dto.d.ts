import { HabitGoalType, HabitStatus } from "../../../generated/prisma/enums";
export declare class UpdateHabitDto {
    name?: string;
    description?: string;
    goalType?: HabitGoalType;
    goalValue?: number;
    goalUnit?: string;
    categoryId?: string | null;
    startDate?: string;
    endDate?: string | null;
}
export declare class UpdateHabitStatusDto {
    status: HabitStatus;
}
