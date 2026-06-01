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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
const enums_1 = require("../../generated/prisma/enums");
const schedule_util_1 = require("../../common/utils/schedule.util");
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getToday(userId, timezone, date) {
        const dateKey = date ?? (0, schedule_util_1.todayKey)(timezone);
        const habits = await this.prisma.habit.findMany({
            where: {
                userId,
                deletedAt: null,
                status: enums_1.HabitStatus.active,
            },
            include: {
                category: true,
                schedule: true,
                streak: true,
                reminders: { where: { deletedAt: null, isEnabled: true } },
            },
        });
        const todayHabits = [];
        for (const habit of habits) {
            if (!habit.schedule)
                continue;
            if (!(0, schedule_util_1.isHabitInTrackingPeriod)(dateKey, habit.startDate, habit.endDate)) {
                continue;
            }
            const isScheduled = (0, schedule_util_1.isScheduledOnDateWithStart)(habit.schedule.repeatType, habit.schedule.repeatConfig, dateKey, habit.startDate);
            if (!isScheduled)
                continue;
            let log = await this.prisma.habitLog.findUnique({
                where: {
                    habitId_logDate: {
                        habitId: habit.id,
                        logDate: new Date(dateKey),
                    },
                },
            });
            if (!log) {
                log = await this.prisma.habitLog.create({
                    data: {
                        habitId: habit.id,
                        userId,
                        logDate: new Date(dateKey),
                        status: enums_1.HabitLogStatus.pending,
                    },
                });
            }
            todayHabits.push({
                habit: {
                    id: habit.id,
                    name: habit.name,
                    description: habit.description,
                    goalType: habit.goalType,
                    goalValue: habit.goalValue,
                    goalUnit: habit.goalUnit,
                    category: habit.category,
                    streak: habit.streak,
                    reminders: habit.reminders,
                },
                log: {
                    id: log.id,
                    status: log.status,
                    progressValue: log.progressValue,
                    note: log.note,
                    checkedInAt: log.checkedInAt,
                    logDate: log.logDate,
                },
            });
        }
        const summary = {
            total: todayHabits.length,
            completed: todayHabits.filter((h) => h.log.status === enums_1.HabitLogStatus.completed).length,
            pending: todayHabits.filter((h) => h.log.status === enums_1.HabitLogStatus.pending).length,
            partial: todayHabits.filter((h) => h.log.status === enums_1.HabitLogStatus.partial).length,
            skipped: todayHabits.filter((h) => h.log.status === enums_1.HabitLogStatus.skipped).length,
        };
        return { date: dateKey, summary, habits: todayHabits };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map