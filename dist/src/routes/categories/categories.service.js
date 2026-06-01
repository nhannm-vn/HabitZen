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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
const business_exception_1 = require("../../common/exceptions/business.exception");
const error_codes_1 = require("../../common/constants/error-codes");
const DEFAULT_CATEGORY_NAME = 'Khác';
let CategoriesService = class CategoriesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async seedDefaults() {
        const existing = await this.prisma.category.findFirst({
            where: { name: DEFAULT_CATEGORY_NAME, userId: null, isDefault: true },
        });
        if (existing)
            return;
        const defaults = [
            { name: 'Sức khỏe', color: '#22c55e', icon: 'heart' },
            { name: 'Học tập', color: '#3b82f6', icon: 'book' },
            { name: 'Công việc', color: '#f59e0b', icon: 'briefcase' },
            { name: 'Tài chính', color: '#10b981', icon: 'wallet' },
            { name: 'Tinh thần', color: '#a855f7', icon: 'sparkles' },
            { name: 'Gia đình', color: '#ec4899', icon: 'home' },
            {
                name: DEFAULT_CATEGORY_NAME,
                color: '#6b7280',
                icon: 'folder',
                isDefault: true,
            },
        ];
        await this.prisma.category.createMany({
            data: defaults.map((d) => ({
                name: d.name,
                color: d.color,
                icon: d.icon,
                isDefault: d.isDefault ?? false,
                userId: null,
            })),
            skipDuplicates: true,
        });
    }
    async findAll(userId) {
        return this.prisma.category.findMany({
            where: {
                deletedAt: null,
                OR: [{ userId: null }, { userId }],
            },
            orderBy: [{ isDefault: 'desc' }, { name: 'asc' }],
        });
    }
    async create(userId, dto) {
        const duplicate = await this.prisma.category.findFirst({
            where: {
                userId,
                name: dto.name.trim(),
                deletedAt: null,
            },
        });
        if (duplicate) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.CAT_BR08, 'Category name already exists', common_1.HttpStatus.CONFLICT);
        }
        return this.prisma.category.create({
            data: {
                userId,
                name: dto.name.trim(),
                color: dto.color,
                icon: dto.icon,
                isDefault: false,
            },
        });
    }
    async update(userId, id, dto) {
        const category = await this.prisma.category.findFirst({
            where: { id, userId, deletedAt: null },
        });
        if (!category) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.NOT_FOUND, 'Category not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (category.isDefault) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.CAT_BR05, 'Cannot modify system default category', common_1.HttpStatus.FORBIDDEN);
        }
        if (dto.name) {
            const duplicate = await this.prisma.category.findFirst({
                where: {
                    userId,
                    name: dto.name.trim(),
                    deletedAt: null,
                    NOT: { id },
                },
            });
            if (duplicate) {
                throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.CAT_BR08, 'Category name already exists', common_1.HttpStatus.CONFLICT);
            }
        }
        return this.prisma.category.update({
            where: { id },
            data: {
                ...(dto.name !== undefined && { name: dto.name.trim() }),
                ...(dto.color !== undefined && { color: dto.color }),
                ...(dto.icon !== undefined && { icon: dto.icon }),
            },
        });
    }
    async remove(userId, id) {
        const category = await this.prisma.category.findFirst({
            where: { id, userId, deletedAt: null },
        });
        if (!category) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.NOT_FOUND, 'Category not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (category.isDefault) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.CAT_BR05, 'Cannot delete system default category', common_1.HttpStatus.FORBIDDEN);
        }
        const fallback = await this.prisma.category.findFirst({
            where: { name: DEFAULT_CATEGORY_NAME, userId: null, isDefault: true },
        });
        await this.prisma.$transaction([
            this.prisma.habit.updateMany({
                where: { categoryId: id, userId },
                data: { categoryId: fallback?.id ?? null },
            }),
            this.prisma.category.update({
                where: { id },
                data: { deletedAt: new Date() },
            }),
        ]);
        return { message: 'Category deleted. Habits moved to default category.' };
    }
    async getDefaultCategoryId() {
        const cat = await this.prisma.category.findFirst({
            where: { name: DEFAULT_CATEGORY_NAME, userId: null, isDefault: true },
        });
        return cat?.id ?? null;
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map