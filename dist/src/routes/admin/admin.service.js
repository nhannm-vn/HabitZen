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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
const business_exception_1 = require("../../common/exceptions/business.exception");
const error_codes_1 = require("../../common/constants/error-codes");
const enums_1 = require("../../generated/prisma/enums");
const prisma_json_util_1 = require("../../common/utils/prisma-json.util");
let AdminService = class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async logAction(adminId, action, targetType, targetId, metadata) {
        await this.prisma.adminLog.create({
            data: {
                adminId,
                action,
                targetType,
                targetId,
                metadata: (0, prisma_json_util_1.toJsonValue)(metadata),
            },
        });
    }
    async listUsers(query) {
        const page = query.page ?? 1;
        const limit = query.limit ?? 20;
        const skip = (page - 1) * limit;
        const where = {
            deletedAt: null,
            role: enums_1.UserRole.user,
            ...(query.search && {
                OR: [
                    { email: { contains: query.search, mode: 'insensitive' } },
                    {
                        fullName: { contains: query.search, mode: 'insensitive' },
                    },
                ],
            }),
        };
        const [items, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true,
                    email: true,
                    fullName: true,
                    role: true,
                    isActive: true,
                    lastLoginAt: true,
                    createdAt: true,
                },
            }),
            this.prisma.user.count({ where }),
        ]);
        return {
            items,
            meta: { page, limit, total, totalPages: Math.ceil(total / limit) || 1 },
        };
    }
    async getUser(userId) {
        const user = await this.prisma.user.findFirst({
            where: { id: userId, deletedAt: null },
            select: {
                id: true,
                email: true,
                fullName: true,
                role: true,
                isActive: true,
                timezone: true,
                lastLoginAt: true,
                createdAt: true,
                _count: {
                    select: { habits: true },
                },
            },
        });
        if (!user) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.NOT_FOUND, 'User not found', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async updateUserStatus(adminId, userId, dto) {
        if (adminId === userId) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.ADM_BR06, 'Cannot lock your own admin account', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.prisma.user.findFirst({
            where: { id: userId, deletedAt: null, role: enums_1.UserRole.user },
        });
        if (!user) {
            throw new business_exception_1.BusinessException(error_codes_1.ErrorCodes.NOT_FOUND, 'User not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updated = await this.prisma.user.update({
            where: { id: userId },
            data: { isActive: dto.isActive },
            select: {
                id: true,
                email: true,
                fullName: true,
                isActive: true,
            },
        });
        await this.logAction(adminId, dto.isActive ? 'USER_UNLOCKED' : 'USER_LOCKED', 'user', userId, { isActive: dto.isActive });
        return updated;
    }
    async getSystemStats() {
        const [totalUsers, activeUsers, totalHabits, activeHabits] = await Promise.all([
            this.prisma.user.count({
                where: { deletedAt: null, role: enums_1.UserRole.user },
            }),
            this.prisma.user.count({
                where: { deletedAt: null, role: enums_1.UserRole.user, isActive: true },
            }),
            this.prisma.habit.count({ where: { deletedAt: null } }),
            this.prisma.habit.count({
                where: { deletedAt: null, status: 'active' },
            }),
        ]);
        return { totalUsers, activeUsers, totalHabits, activeHabits };
    }
    async getAdminLogs(page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [items, total] = await Promise.all([
            this.prisma.adminLog.findMany({
                where: { deletedAt: null },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    admin: { select: { id: true, email: true, fullName: true } },
                },
            }),
            this.prisma.adminLog.count({ where: { deletedAt: null } }),
        ]);
        return {
            items,
            meta: { page, limit, total, totalPages: Math.ceil(total / limit) || 1 },
        };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map