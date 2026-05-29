"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveLogStatus = resolveLogStatus;
const enums_1 = require("../../generated/prisma/enums");
function resolveLogStatus(goalType, goalValue, progressValue, explicitStatus) {
    if (explicitStatus === enums_1.HabitLogStatus.skipped) {
        return enums_1.HabitLogStatus.skipped;
    }
    if (goalType === enums_1.HabitGoalType.boolean) {
        return enums_1.HabitLogStatus.completed;
    }
    const progress = progressValue ?? 0;
    const target = goalValue ?? 0;
    if (target <= 0) {
        return progress > 0 ? enums_1.HabitLogStatus.completed : enums_1.HabitLogStatus.partial;
    }
    if (progress >= target)
        return enums_1.HabitLogStatus.completed;
    if (progress > 0)
        return enums_1.HabitLogStatus.partial;
    return enums_1.HabitLogStatus.pending;
}
//# sourceMappingURL=log-status.util.js.map