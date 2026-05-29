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
exports.OwnershipService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const business_exception_1 = require("../../common/exceptions/business.exception");
const error_codes_1 = require("../../common/constants/error-codes");
let OwnershipService = class OwnershipService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async assertHabitOwner(habitId, userId) {
        const habit = await this.prisma.habit.findFirst({
            where: { id: habitId, userId, deletedAt: null },
        });
        if (!habit) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.HABIT_BR02, 'Habit not found or access denied', common_1.HttpStatus.NOT_FOUND);
        }
        return habit;
    }
    async assertCategoryAccess(categoryId, userId) {
        const category = await this.prisma.category.findFirst({
            where: {
                id: categoryId,
                deletedAt: null,
                OR: [{ userId: null }, { userId }],
            },
        });
        if (!category) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.NOT_FOUND, 'Category not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (category.isDefault && category.userId === null) {
            return category;
        }
        if (category.userId !== userId) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.FORBIDDEN, 'You cannot use this category', common_1.HttpStatus.FORBIDDEN);
        }
        return category;
    }
};
exports.OwnershipService = OwnershipService;
exports.OwnershipService = OwnershipService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OwnershipService);
//# sourceMappingURL=ownership.service.js.map