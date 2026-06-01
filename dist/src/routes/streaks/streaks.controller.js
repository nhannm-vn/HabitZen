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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreaksController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
const streak_service_1 = require("../../shared/services/streak.service");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const request_user_interface_1 = require("../../common/interfaces/request-user.interface");
const ownership_service_1 = require("../../shared/services/ownership.service");
const swagger_1 = require("@nestjs/swagger");
let StreaksController = class StreaksController {
    prisma;
    streakService;
    ownership;
    constructor(prisma, streakService, ownership) {
        this.prisma = prisma;
        this.streakService = streakService;
        this.ownership = ownership;
    }
    findAll(user) {
        return this.prisma.streak.findMany({
            where: { userId: user.id, deletedAt: null },
            include: { habit: { select: { id: true, name: true, status: true } } },
            orderBy: { currentStreak: 'desc' },
        });
    }
    async findByHabit(user, habitId) {
        await this.ownership.assertHabitOwner(habitId, user.id);
        await this.streakService.recalculateForHabit(habitId, user.id);
        return this.prisma.streak.findUnique({
            where: { habitId },
            include: { habit: { select: { id: true, name: true } } },
        });
    }
};
exports.StreaksController = StreaksController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_user_interface_1.RequestUser]),
    __metadata("design:returntype", void 0)
], StreaksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('habits/:habitId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('habitId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_user_interface_1.RequestUser, String]),
    __metadata("design:returntype", Promise)
], StreaksController.prototype, "findByHabit", null);
exports.StreaksController = StreaksController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('streaks'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        streak_service_1.StreakService,
        ownership_service_1.OwnershipService])
], StreaksController);
//# sourceMappingURL=streaks.controller.js.map