import { ScheduleRepeatType } from "../../../generated/prisma/enums";
export declare class RepeatConfigDto {
    daysOfWeek?: number[];
    daysOfMonth?: number[];
    intervalDays?: number;
}
export declare class ScheduleDto {
    repeatType: ScheduleRepeatType;
    repeatConfig?: RepeatConfigDto;
}
