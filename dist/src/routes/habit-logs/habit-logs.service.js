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
exports.HabitLogsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
const ownership_service_1 = require("../../shared/services/ownership.service");
const streak_service_1 = require("../../shared/services/streak.service");
const business_exception_1 = require("../../common/exceptions/business.exception");
const error_codes_1 = require("../../common/constants/error-codes");
const enums_1 = require("../../generated/prisma/enums");
const schedule_util_1 = require("../../common/utils/schedule.util");
const log_status_util_1 = require("../../common/utils/log-status.util");
const date_util_1 = require("../../common/utils/date.util");
let HabitLogsService = class HabitLogsService {
    prisma;
    ownership;
    streakService;
    constructor(prisma, ownership, streakService) {
        this.prisma = prisma;
        this.ownership = ownership;
        this.streakService = streakService;
    }
    async findAll(userId, filters) {
        const logDateFilter = filters.date
            ? { equals: new Date(filters.date) }
            : filters.from || filters.to
                ? {
                    ...(filters.from && { gte: new Date(filters.from) }),
                    ...(filters.to && { lte: new Date(filters.to) }),
                }
                : undefined;
        return this.prisma.habitLog.findMany({
            where: {
                userId,
                deletedAt: null,
                ...(filters.habitId && { habitId: filters.habitId }),
                ...(logDateFilter && { logDate: logDateFilter }),
            },
            include: { habit: { select: { id: true, name: true, goalType: true } } },
            orderBy: { logDate: 'desc' },
        });
    }
    async assertScheduledToday(habitId, userId, dateKey, timezone) {
        const habit = await this.prisma.habit.findFirst({
            where: { id: habitId, userId, deletedAt: null },
            include: { schedule: true },
        });
        if (!habit || habit.status !== enums_1.HabitStatus.active) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.LOG_BR02, 'Habit is not active or not found', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!habit.schedule) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.LOG_BR02, 'Habit has no schedule', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!(0, schedule_util_1.isHabitInTrackingPeriod)(dateKey, habit.startDate, habit.endDate)) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.LOG_BR02, 'Habit is not in tracking period for this date', common_1.HttpStatus.BAD_REQUEST);
        }
        const scheduled = (0, schedule_util_1.isScheduledOnDateWithStart)(habit.schedule.repeatType, habit.schedule.repeatConfig, dateKey, habit.startDate);
        if (!scheduled) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.LOG_BR02, 'This habit is not scheduled for the selected date', common_1.HttpStatus.BAD_REQUEST);
        }
        return habit;
    }
    async checkIn(userId, timezone, dto) {
        const dateKey = dto.logDate ?? (0, schedule_util_1.todayKey)(timezone);
        const habit = await this.assertScheduledToday(dto.habitId, userId, dateKey, timezone);
        const status = (0, log_status_util_1.resolveLogStatus)(habit.goalType, habit.goalValue, dto.progressValue ?? null, dto.status);
        const log = await this.prisma.habitLog.upsert({
            where: {
                habitId_logDate: {
                    habitId: dto.habitId,
                    logDate: new Date(dateKey),
                },
            },
            create: {
                habitId: dto.habitId,
                userId,
                logDate: new Date(dateKey),
                status,
                progressValue: dto.progressValue,
                note: dto.note,
                checkedInAt: new Date(),
            },
            update: {
                status,
                progressValue: dto.progressValue,
                note: dto.note,
                checkedInAt: new Date(),
            },
        });
        await this.streakService.recalculateForHabit(dto.habitId, userId);
        return log;
    }
    async skip(userId, timezone, habitId, logDate) {
        const dateKey = logDate ?? (0, schedule_util_1.todayKey)(timezone);
        await this.assertScheduledToday(habitId, userId, dateKey, timezone);
        const log = await this.prisma.habitLog.upsert({
            where: {
                habitId_logDate: { habitId, logDate: new Date(dateKey) },
            },
            create: {
                habitId,
                userId,
                logDate: new Date(dateKey),
                status: enums_1.HabitLogStatus.skipped,
                checkedInAt: new Date(),
            },
            update: {
                status: enums_1.HabitLogStatus.skipped,
                checkedInAt: new Date(),
            },
        });
        await this.streakService.recalculateForHabit(habitId, userId);
        return log;
    }
    async updateLog(userId, id, dto) {
        const existing = await this.prisma.habitLog.findFirst({
            where: { id, userId, deletedAt: null },
            include: { habit: true },
        });
        if (!existing) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.NOT_FOUND, 'Log not found', common_1.HttpStatus.NOT_FOUND);
        }
        const status = dto.status ??
            (0, log_status_util_1.resolveLogStatus)(existing.habit.goalType, existing.habit.goalValue, dto.progressValue ?? existing.progressValue, dto.status);
        const log = await this.prisma.habitLog.update({
            where: { id },
            data: {
                ...(dto.progressValue !== undefined && {
                    progressValue: dto.progressValue,
                }),
                ...(dto.note !== undefined && { note: dto.note }),
                status,
                checkedInAt: new Date(),
            },
        });
        await this.streakService.recalculateForHabit(existing.habitId, userId);
        return log;
    }
    async processMissed(userId, timezone) {
        const today = (0, schedule_util_1.todayKey)(timezone);
        const habits = await this.prisma.habit.findMany({
            where: { userId, deletedAt: null, status: enums_1.HabitStatus.active },
            include: { schedule: true },
        });
        let updated = 0;
        for (const habit of habits) {
            if (!habit.schedule)
                continue;
            const pendingLogs = await this.prisma.habitLog.findMany({
                where: {
                    habitId: habit.id,
                    userId,
                    status: enums_1.HabitLogStatus.pending,
                    logDate: { lt: new Date(today) },
                    deletedAt: null,
                },
            });
            for (const log of pendingLogs) {
                const dateKey = log.logDate.toISOString().slice(0, 10);
                const scheduled = (0, schedule_util_1.isScheduledOnDateWithStart)(habit.schedule.repeatType, habit.schedule.repeatConfig, dateKey, habit.startDate);
                if (scheduled) {
                    await this.prisma.habitLog.update({
                        where: { id: log.id },
                        data: { status: enums_1.HabitLogStatus.missed },
                    });
                    updated += 1;
                }
            }
            let cursor = habit.startDate.toISOString().slice(0, 10);
            while (cursor < today) {
                if ((0, schedule_util_1.isHabitInTrackingPeriod)(cursor, habit.startDate, habit.endDate) &&
                    (0, schedule_util_1.isScheduledOnDateWithStart)(habit.schedule.repeatType, habit.schedule.repeatConfig, cursor, habit.startDate)) {
                    const existing = await this.prisma.habitLog.findUnique({
                        where: {
                            habitId_logDate: {
                                habitId: habit.id,
                                logDate: new Date(cursor),
                            },
                        },
                    });
                    if (!existing) {
                        await this.prisma.habitLog.create({
                            data: {
                                habitId: habit.id,
                                userId,
                                logDate: new Date(cursor),
                                status: enums_1.HabitLogStatus.missed,
                            },
                        });
                        updated += 1;
                    }
                }
                cursor = (0, date_util_1.addDays)(cursor, 1);
            }
            await this.streakService.recalculateForHabit(habit.id, userId);
        }
        return { processed: updated };
    }
};
exports.HabitLogsService = HabitLogsService;
exports.HabitLogsService = HabitLogsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ownership_service_1.OwnershipService,
        streak_service_1.StreakService])
], HabitLogsService);
//# sourceMappingURL=habit-logs.service.js.map