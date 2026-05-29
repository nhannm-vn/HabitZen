import { ScheduleRepeatType } from "../../generated/prisma/enums";
export interface RepeatConfig {
    daysOfWeek?: number[];
    daysOfMonth?: number[];
    intervalDays?: number;
}
export declare function isHabitInTrackingPeriod(dateKey: string, startDate: Date, endDate: Date | null): boolean;
export declare function isScheduledOnDate(repeatType: ScheduleRepeatType, repeatConfig: RepeatConfig | null, dateKey: string): boolean;
export declare function isScheduledOnDateWithStart(repeatType: ScheduleRepeatType, repeatConfig: RepeatConfig | null, dateKey: string, habitStartDate: Date): boolean;
export declare function todayKey(timezone: string): string;
