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
exports.RemindersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
const ownership_service_1 = require("../../shared/services/ownership.service");
const business_exception_1 = require("../../common/exceptions/business.exception");
const error_codes_1 = require("../../common/constants/error-codes");
const enums_1 = require("../../generated/prisma/enums");
const schedule_util_1 = require("../../common/utils/schedule.util");
let RemindersService = class RemindersService {
    prisma;
    ownership;
    constructor(prisma, ownership) {
        this.prisma = prisma;
        this.ownership = ownership;
    }
    parseTime(time) {
        const parts = time.split(':').map(Number);
        const d = new Date(0);
        d.setUTCHours(parts[0], parts[1], parts[2] ?? 0, 0);
        return d;
    }
    async findByHabit(userId, habitId) {
        await this.ownership.assertHabitOwner(habitId, userId);
        return this.prisma.reminder.findMany({
            where: { habitId, userId, deletedAt: null },
            orderBy: { remindAt: 'asc' },
        });
    }
    async create(userId, habitId, dto) {
        await this.ownership.assertHabitOwner(habitId, userId);
        return this.prisma.reminder.create({
            data: {
                habitId,
                userId,
                remindAt: this.parseTime(dto.remindAt),
                isEnabled: dto.isEnabled ?? true,
            },
        });
    }
    async update(userId, id, dto) {
        const reminder = await this.prisma.reminder.findFirst({
            where: { id, userId, deletedAt: null },
        });
        if (!reminder) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.NOT_FOUND, 'Reminder not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.prisma.reminder.update({
            where: { id },
            data: {
                ...(dto.remindAt !== undefined && {
                    remindAt: this.parseTime(dto.remindAt),
                }),
                ...(dto.isEnabled !== undefined && { isEnabled: dto.isEnabled }),
            },
        });
    }
    async remove(userId, id) {
        const reminder = await this.prisma.reminder.findFirst({
            where: { id, userId, deletedAt: null },
        });
        if (!reminder) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.NOT_FOUND, 'Reminder not found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.prisma.reminder.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
        return { message: 'Reminder deleted' };
    }
    async getDueReminders(userId, timezone) {
        const dateKey = (0, schedule_util_1.todayKey)(timezone);
        const habits = await this.prisma.habit.findMany({
            where: { userId, deletedAt: null, status: enums_1.HabitStatus.active },
            include: {
                schedule: true,
                reminders: { where: { deletedAt: null, isEnabled: true } },
                logs: {
                    where: {
                        logDate: new Date(dateKey),
                        deletedAt: null,
                    },
                },
            },
        });
        return habits
            .filter((habit) => {
            if (!habit.schedule)
                return false;
            if (!(0, schedule_util_1.isHabitInTrackingPeriod)(dateKey, habit.startDate, habit.endDate)) {
                return false;
            }
            const scheduled = (0, schedule_util_1.isScheduledOnDateWithStart)(habit.schedule.repeatType, habit.schedule.repeatConfig, dateKey, habit.startDate);
            if (!scheduled)
                return false;
            const log = habit.logs[0];
            if (log?.status === enums_1.HabitLogStatus.completed)
                return false;
            return habit.reminders.length > 0;
        })
            .map((habit) => ({
            habitId: habit.id,
            habitName: habit.name,
            reminders: habit.reminders.map((r) => ({
                id: r.id,
                remindAt: r.remindAt,
            })),
        }));
    }
};
exports.RemindersService = RemindersService;
exports.RemindersService = RemindersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ownership_service_1.OwnershipService])
], RemindersService);
//# sourceMappingURL=reminders.service.js.map