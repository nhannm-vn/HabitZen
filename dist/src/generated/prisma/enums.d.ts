export declare const UserRole: {
    readonly user: "user";
    readonly admin: "admin";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const HabitGoalType: {
    readonly boolean: "boolean";
    readonly count: "count";
    readonly duration: "duration";
    readonly distance: "distance";
};
export type HabitGoalType = (typeof HabitGoalType)[keyof typeof HabitGoalType];
export declare const HabitStatus: {
    readonly active: "active";
    readonly paused: "paused";
    readonly archived: "archived";
};
export type HabitStatus = (typeof HabitStatus)[keyof typeof HabitStatus];
export declare const HabitLogStatus: {
    readonly pending: "pending";
    readonly completed: "completed";
    readonly partial: "partial";
    readonly missed: "missed";
    readonly skipped: "skipped";
};
export type HabitLogStatus = (typeof HabitLogStatus)[keyof typeof HabitLogStatus];
export declare const ScheduleRepeatType: {
    readonly daily: "daily";
    readonly weekly: "weekly";
    readonly monthly: "monthly";
    readonly custom: "custom";
};
export type ScheduleRepeatType = (typeof ScheduleRepeatType)[keyof typeof ScheduleRepeatType];
export declare const TemplateDifficulty: {
    readonly beginner: "beginner";
    readonly intermediate: "intermediate";
    readonly advanced: "advanced";
};
export type TemplateDifficulty = (typeof TemplateDifficulty)[keyof typeof TemplateDifficulty];
