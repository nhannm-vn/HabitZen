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
exports.TemplatesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
const business_exception_1 = require("../../common/exceptions/business.exception");
const error_codes_1 = require("../../common/constants/error-codes");
const enums_1 = require("../../generated/prisma/enums");
let TemplatesService = class TemplatesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(filters) {
        return this.prisma.celebrityHabitTemplate.findMany({
            where: {
                deletedAt: null,
                isPublic: true,
                ...(filters?.difficulty && {
                    difficulty: filters.difficulty,
                }),
                ...(filters?.featured !== undefined && {
                    isFeatured: filters.featured,
                }),
            },
            include: {
                category: true,
                items: { where: { deletedAt: null }, orderBy: { displayOrder: 'asc' } },
                _count: { select: { importedByUsers: true } },
            },
            orderBy: [{ isFeatured: 'desc' }, { createdAt: 'desc' }],
        });
    }
    async findOne(id) {
        const template = await this.prisma.celebrityHabitTemplate.findFirst({
            where: { id, deletedAt: null, isPublic: true },
            include: {
                category: true,
                items: { where: { deletedAt: null }, orderBy: { displayOrder: 'asc' } },
            },
        });
        if (!template) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.NOT_FOUND, 'Template not found', common_1.HttpStatus.NOT_FOUND);
        }
        return template;
    }
    async importTemplate(userId, templateId) {
        const template = await this.findOne(templateId);
        const existingImport = await this.prisma.userImportedTemplate.findUnique({
            where: {
                userId_templateId: { userId, templateId },
            },
        });
        const createdHabits = await this.prisma.$transaction(async (tx) => {
            if (!existingImport) {
                await tx.userImportedTemplate.create({
                    data: { userId, templateId },
                });
            }
            const habits = [];
            for (const item of template.items) {
                const habit = await tx.habit.create({
                    data: {
                        userId,
                        categoryId: template.categoryId,
                        name: item.name,
                        description: item.description,
                        goalType: item.goalType,
                        goalValue: item.goalValue,
                        goalUnit: item.goalUnit,
                        status: enums_1.HabitStatus.active,
                        startDate: new Date(),
                    },
                });
                await tx.schedule.create({
                    data: {
                        habitId: habit.id,
                        repeatType: item.repeatType,
                        repeatConfig: item.repeatConfig ?? undefined,
                    },
                });
                await tx.streak.create({
                    data: { habitId: habit.id, userId },
                });
                habits.push({ id: habit.id, name: habit.name });
            }
            return habits;
        });
        return {
            templateId,
            importedCount: createdHabits.length,
            habits: createdHabits,
        };
    }
};
exports.TemplatesService = TemplatesService;
exports.TemplatesService = TemplatesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TemplatesService);
//# sourceMappingURL=templates.service.js.map