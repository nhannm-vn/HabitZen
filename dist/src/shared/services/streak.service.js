"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreakService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const schedule_util_1 = require("../../common/utils/schedule.util");
const streak_util_1 = require("../../common/utils/streak.util");
const enums_1 = require("../../generated/prisma/enums");
const date_util_1 = require("../../common/utils/date.util");
let StreakService = class StreakService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async recalculateForHabit(habitId, userId) {
        const habit = await this.prisma.habit.findFirst({
            where: { id: habitId, userId, deletedAt: null },
            include: { schedule: true },
        });
        if (!habit || !habit.schedule)
            return null;
        const logs = await this.prisma.habitLog.findMany({
            where: { habitId, userId, deletedAt: null },
            orderBy: { logDate: 'asc' },
        });
        const repeatConfig = habit.schedule.repeatConfig;
        const fromKey = habit.startDate.toISOString().slice(0, 10);
        const toKey = new Date().toISOString().slice(0, 10);
        const dateKeys = (0, date_util_1.dateKeyRange)(fromKey, toKey);
        const logMap = new Map(logs.map((l) => [l.logDate.toISOString().slice(0, 10), l.status]));
        const entries = dateKeys
            .filter((dk) => (0, schedule_util_1.isHabitInTrackingPeriod)(dk, habit.startDate, habit.endDate))
            .map((dk) => {
            const isScheduled = (0, schedule_util_1.isScheduledOnDateWithStart)(habit.schedule.repeatType, repeatConfig, dk, habit.startDate);
            return {
                logDate: dk,
                status: logMap.get(dk) ?? enums_1.HabitLogStatus.pending,
                isScheduled,
            };
        })
            .filter((e) => e.isScheduled);
        const { currentStreak, longestStreak, lastCompletedDate } = (0, streak_util_1.calculateStreaks)(entries);
        const existing = await this.prisma.streak.findUnique({
            where: { habitId },
        });
        const newLongest = Math.max(longestStreak, existing?.longestStreak ?? 0);
        const streak = await this.prisma.streak.upsert({
            where: { habitId },
            create: {
                habitId,
                userId,
                currentStreak,
                longestStreak: newLongest,
                lastCompletedDate: lastCompletedDate
                    ? new Date(lastCompletedDate)
                    : null,
            },
            update: {
                currentStreak,
                longestStreak: newLongest,
                lastCompletedDate: lastCompletedDate
                    ? new Date(lastCompletedDate)
                    : null,
            },
        });
        return streak;
    }
};
exports.StreakService = StreakService;
exports.StreakService = StreakService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StreakService);
//# sourceMappingURL=streak.service.js.map