import { HabitGoalType } from "../../../generated/prisma/enums";
import { ScheduleDto } from './schedule.dto';
export declare class CreateHabitDto {
    name: string;
    description?: string;
    goalType: HabitGoalType;
    goalValue?: number;
    goalUnit?: string;
    categoryId?: string;
    startDate: string;
    endDate?: string;
    schedule: ScheduleDto;
}
