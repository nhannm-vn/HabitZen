"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateStreaks = calculateStreaks;
const enums_1 = require("../../generated/prisma/enums");
function calculateStreaks(entries) {
    let current = 0;
    let longest = 0;
    let lastCompleted = null;
    for (const entry of entries) {
        if (!entry.isScheduled)
            continue;
        if (entry.status === enums_1.HabitLogStatus.completed) {
            current += 1;
            longest = Math.max(longest, current);
            lastCompleted = entry.logDate;
        }
        else if (entry.status === enums_1.HabitLogStatus.missed) {
            current = 0;
        }
        else if (entry.status === enums_1.HabitLogStatus.skipped) {
            continue;
        }
    }
    const scheduled = entries.filter((e) => e.isScheduled);
    let backward = 0;
    for (let i = scheduled.length - 1; i >= 0; i--) {
        const s = scheduled[i].status;
        if (s === enums_1.HabitLogStatus.completed) {
            backward += 1;
        }
        else if (s === enums_1.HabitLogStatus.skipped) {
            continue;
        }
        else if (s === enums_1.HabitLogStatus.missed) {
            break;
        }
        else if (s === enums_1.HabitLogStatus.partial || s === enums_1.HabitLogStatus.pending) {
            break;
        }
    }
    return {
        currentStreak: backward,
        longestStreak: Math.max(longest, backward),
        lastCompletedDate: lastCompleted,
    };
}
//# sourceMappingURL=streak.util.js.map