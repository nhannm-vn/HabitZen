"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHabitInTrackingPeriod = isHabitInTrackingPeriod;
exports.isScheduledOnDate = isScheduledOnDate;
exports.isScheduledOnDateWithStart = isScheduledOnDateWithStart;
exports.todayKey = todayKey;
const enums_1 = require("../../generated/prisma/enums");
const date_util_1 = require("./date.util");
function isHabitInTrackingPeriod(dateKey, startDate, endDate) {
    const start = startDate.toISOString().slice(0, 10);
    if (dateKey < start)
        return false;
    if (endDate) {
        const end = endDate.toISOString().slice(0, 10);
        if (dateKey > end)
            return false;
    }
    return true;
}
function isScheduledOnDate(repeatType, repeatConfig, dateKey) {
    switch (repeatType) {
        case enums_1.ScheduleRepeatType.daily:
            return true;
        case enums_1.ScheduleRepeatType.weekly: {
            const days = repeatConfig?.daysOfWeek ?? [];
            if (days.length === 0)
                return false;
            return days.includes((0, date_util_1.getIsoWeekday)(dateKey));
        }
        case enums_1.ScheduleRepeatType.monthly: {
            const days = repeatConfig?.daysOfMonth ?? [];
            if (days.length === 0)
                return false;
            return days.includes((0, date_util_1.getDayOfMonth)(dateKey));
        }
        case enums_1.ScheduleRepeatType.custom:
            return true;
        default:
            return false;
    }
}
function isScheduledOnDateWithStart(repeatType, repeatConfig, dateKey, habitStartDate) {
    if (repeatType === enums_1.ScheduleRepeatType.custom) {
        const interval = repeatConfig?.intervalDays ?? 1;
        const startKey = habitStartDate.toISOString().slice(0, 10);
        const diffMs = (0, date_util_1.parseDateKey)(dateKey).getTime() - (0, date_util_1.parseDateKey)(startKey).getTime();
        const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
        if (diffDays < 0)
            return false;
        return diffDays % interval === 0;
    }
    return isScheduledOnDate(repeatType, repeatConfig, dateKey);
}
function todayKey(timezone) {
    return (0, date_util_1.toDateKey)(new Date(), timezone);
}
//# sourceMappingURL=schedule.util.js.map