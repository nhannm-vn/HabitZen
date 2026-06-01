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
exports.HabitsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
const ownership_service_1 = require("../../shared/services/ownership.service");
const business_exception_1 = require("../../common/exceptions/business.exception");
const error_codes_1 = require("../../common/constants/error-codes");
const enums_1 = require("../../generated/prisma/enums");
const prisma_json_util_1 = require("../../common/utils/prisma-json.util");
let HabitsService = class HabitsService {
    prisma;
    ownership;
    constructor(prisma, ownership) {
        this.prisma = prisma;
        this.ownership = ownership;
    }
    validateSchedule(dto) {
        if (dto.repeatType === enums_1.ScheduleRepeatType.weekly) {
            if (!dto.repeatConfig?.daysOfWeek?.length) {
                throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.SCH_BR05, 'Weekly schedule requires at least one day of week');
            }
        }
        if (dto.repeatType === enums_1.ScheduleRepeatType.monthly) {
            if (!dto.repeatConfig?.daysOfMonth?.length) {
                throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.SCH_BR06, 'Monthly schedule requires at least one day of month');
            }
        }
    }
    habitInclude() {
        return {
            category: true,
            schedule: true,
            streak: true,
            reminders: { where: { deletedAt: null } },
        };
    }
    async findAll(userId, filters) {
        return this.prisma.habit.findMany({
            where: {
                userId,
                deletedAt: null,
                ...(filters?.status && { status: filters.status }),
                ...(filters?.categoryId && { categoryId: filters.categoryId }),
            },
            include: this.habitInclude(),
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(userId, id) {
        const habit = await this.prisma.habit.findFirst({
            where: { id, userId, deletedAt: null },
            include: this.habitInclude(),
        });
        if (!habit) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.NOT_FOUND, 'Habit not found', common_1.HttpStatus.NOT_FOUND);
        }
        return habit;
    }
    async create(userId, dto) {
        if (!dto.name?.trim()) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.HABIT_BR03, 'Habit name is required');
        }
        this.validateSchedule(dto.schedule);
        if (dto.categoryId) {
            await this.ownership.assertCategoryAccess(dto.categoryId, userId);
        }
        return this.prisma.$transaction(async (tx) => {
            const habit = await tx.habit.create({
                data: {
                    userId,
                    name: dto.name.trim(),
                    description: dto.description,
                    goalType: dto.goalType,
                    goalValue: dto.goalValue,
                    goalUnit: dto.goalUnit,
                    categoryId: dto.categoryId,
                    startDate: new Date(dto.startDate),
                    endDate: dto.endDate ? new Date(dto.endDate) : null,
                    status: enums_1.HabitStatus.active,
                },
            });
            await tx.schedule.create({
                data: {
                    habitId: habit.id,
                    repeatType: dto.schedule.repeatType,
                    repeatConfig: (0, prisma_json_util_1.toJsonValue)(dto.schedule.repeatConfig),
                },
            });
            await tx.streak.create({
                data: { habitId: habit.id, userId },
            });
            return tx.habit.findUniqueOrThrow({
                where: { id: habit.id },
                include: this.habitInclude(),
            });
        });
    }
    async update(userId, id, dto) {
        await this.ownership.assertHabitOwner(id, userId);
        if (dto.categoryId) {
            await this.ownership.assertCategoryAccess(dto.categoryId, userId);
        }
        return this.prisma.habit.update({
            where: { id },
            data: {
                ...(dto.name !== undefined && { name: dto.name.trim() }),
                ...(dto.description !== undefined && { description: dto.description }),
                ...(dto.goalType !== undefined && { goalType: dto.goalType }),
                ...(dto.goalValue !== undefined && { goalValue: dto.goalValue }),
                ...(dto.goalUnit !== undefined && { goalUnit: dto.goalUnit }),
                ...(dto.categoryId !== undefined && { categoryId: dto.categoryId }),
                ...(dto.startDate !== undefined && {
                    startDate: new Date(dto.startDate),
                }),
                ...(dto.endDate !== undefined && {
                    endDate: dto.endDate ? new Date(dto.endDate) : null,
                }),
            },
            include: this.habitInclude(),
        });
    }
    async updateStatus(userId, id, dto) {
        await this.ownership.assertHabitOwner(id, userId);
        return this.prisma.habit.update({
            where: { id },
            data: { status: dto.status },
            include: this.habitInclude(),
        });
    }
    async updateSchedule(userId, habitId, dto) {
        await this.ownership.assertHabitOwner(habitId, userId);
        this.validateSchedule(dto);
        await this.prisma.schedule.upsert({
            where: { habitId },
            create: {
                habitId,
                repeatType: dto.repeatType,
                repeatConfig: (0, prisma_json_util_1.toJsonValue)(dto.repeatConfig),
            },
            update: {
                repeatType: dto.repeatType,
                repeatConfig: (0, prisma_json_util_1.toJsonValue)(dto.repeatConfig),
            },
        });
        return this.findOne(userId, habitId);
    }
    async archive(userId, id) {
        return this.updateStatus(userId, id, { status: enums_1.HabitStatus.archived });
    }
    async remove(userId, id) {
        await this.ownership.assertHabitOwner(id, userId);
        await this.prisma.habit.update({
            where: { id },
            data: { deletedAt: new Date(), status: enums_1.HabitStatus.archived },
        });
        return { message: 'Habit archived (soft deleted)' };
    }
};
exports.HabitsService = HabitsService;
exports.HabitsService = HabitsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        ownership_service_1.OwnershipService])
], HabitsService);
//# sourceMappingURL=habits.service.js.map