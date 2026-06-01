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
exports.StatisticsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
const enums_1 = require("../../generated/prisma/enums");
const date_util_1 = require("../../common/utils/date.util");
const schedule_util_1 = require("../../common/utils/schedule.util");
let StatisticsService = class StatisticsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async computePeriodStats(userId, fromKey, toKey, habitId) {
        const habits = await this.prisma.habit.findMany({
            where: {
                userId,
                deletedAt: null,
                ...(habitId && { id: habitId }),
            },
            include: { schedule: true },
        });
        const logs = await this.prisma.habitLog.findMany({
            where: {
                userId,
                deletedAt: null,
                logDate: { gte: new Date(fromKey), lte: new Date(toKey) },
                ...(habitId && { habitId }),
            },
        });
        const logMap = new Map();
        for (const log of logs) {
            const key = `${log.habitId}:${log.logDate.toISOString().slice(0, 10)}`;
            logMap.set(key, log.status);
        }
        let scheduled = 0;
        let completed = 0;
        let partial = 0;
        let missed = 0;
        let skipped = 0;
        let pending = 0;
        const dateKeys = (0, date_util_1.dateKeyRange)(fromKey, toKey);
        for (const habit of habits) {
            if (!habit.schedule)
                continue;
            for (const dk of dateKeys) {
                if (!(0, schedule_util_1.isHabitInTrackingPeriod)(dk, habit.startDate, habit.endDate)) {
                    continue;
                }
                const isSched = (0, schedule_util_1.isScheduledOnDateWithStart)(habit.schedule.repeatType, habit.schedule.repeatConfig, dk, habit.startDate);
                if (!isSched)
                    continue;
                scheduled += 1;
                const status = logMap.get(`${habit.id}:${dk}`) ?? enums_1.HabitLogStatus.pending;
                switch (status) {
                    case enums_1.HabitLogStatus.completed:
                        completed += 1;
                        break;
                    case enums_1.HabitLogStatus.partial:
                        partial += 1;
                        break;
                    case enums_1.HabitLogStatus.missed:
                        missed += 1;
                        break;
                    case enums_1.HabitLogStatus.skipped:
                        skipped += 1;
                        break;
                    case enums_1.HabitLogStatus.pending:
                        pending += 1;
                        break;
                }
            }
        }
        const completionRate = scheduled > 0 ? Math.round((completed / scheduled) * 10000) / 100 : 0;
        return {
            from: fromKey,
            to: toKey,
            scheduled,
            completed,
            partial,
            missed,
            skipped,
            pending,
            completionRate,
        };
    }
    async getOverview(userId, timezone) {
        const today = (0, schedule_util_1.todayKey)(timezone);
        const activeHabits = await this.prisma.habit.count({
            where: { userId, deletedAt: null, status: enums_1.HabitStatus.active },
        });
        const todayStats = await this.computePeriodStats(userId, today, today);
        const streaks = await this.prisma.streak.findMany({
            where: { userId, deletedAt: null },
            include: { habit: { select: { id: true, name: true, status: true } } },
            orderBy: { currentStreak: 'desc' },
        });
        const best = streaks
            .filter((s) => s.habit.status === enums_1.HabitStatus.active)
            .sort((a, b) => b.currentStreak - a.currentStreak)[0];
        const weekStart = this.getWeekStart(today);
        const weekStats = await this.computePeriodStats(userId, weekStart, today);
        return {
            activeHabits,
            today: todayStats,
            thisWeek: weekStats,
            topStreak: best
                ? {
                    habitId: best.habitId,
                    habitName: best.habit.name,
                    currentStreak: best.currentStreak,
                    longestStreak: best.longestStreak,
                }
                : null,
            streaks: streaks.map((s) => ({
                habitId: s.habitId,
                habitName: s.habit.name,
                currentStreak: s.currentStreak,
                longestStreak: s.longestStreak,
                lastCompletedDate: s.lastCompletedDate,
            })),
        };
    }
    async getByPeriod(userId, from, to, habitId) {
        return this.computePeriodStats(userId, from, to, habitId);
    }
    async getHabitStats(userId, habitId, from, to) {
        const habit = await this.prisma.habit.findFirst({
            where: { id: habitId, userId, deletedAt: null },
            include: { streak: true },
        });
        if (!habit)
            return null;
        const period = await this.computePeriodStats(userId, from, to, habitId);
        return {
            habit: { id: habit.id, name: habit.name },
            streak: habit.streak,
            period,
        };
    }
    getWeekStart(dateKey) {
        const d = new Date(dateKey + 'T00:00:00Z');
        const day = d.getUTCDay();
        const diff = day === 0 ? 6 : day - 1;
        d.setUTCDate(d.getUTCDate() - diff);
        return (0, date_util_1.toDateKey)(d, 'UTC');
    }
};
exports.StatisticsService = StatisticsService;
exports.StatisticsService = StatisticsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StatisticsService);
//# sourceMappingURL=statistics.service.js.map