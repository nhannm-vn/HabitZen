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
exports.HabitLogsController = void 0;
const common_1 = require("@nestjs/common");
const check_in_dto_1 = require("./dto/check-in.dto");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const request_user_interface_1 = require("../../common/interfaces/request-user.interface");
const class_validator_1 = require("class-validator");
const habit_logs_service_1 = require("./habit-logs.service");
const swagger_1 = require("@nestjs/swagger");
class SkipDto {
    logDate;
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], SkipDto.prototype, "logDate", void 0);
let HabitLogsController = class HabitLogsController {
    habitLogsService;
    constructor(habitLogsService) {
        this.habitLogsService = habitLogsService;
    }
    findAll(user, query) {
        return this.habitLogsService.findAll(user.id, query);
    }
    processMissed(user) {
        return this.habitLogsService.processMissed(user.id, user.timezone);
    }
    checkIn(user, dto) {
        return this.habitLogsService.checkIn(user.id, user.timezone, dto);
    }
    skip(user, habitId, body) {
        return this.habitLogsService.skip(user.id, user.timezone, habitId, body.logDate);
    }
    update(user, id, dto) {
        return this.habitLogsService.updateLog(user.id, id, dto);
    }
};
exports.HabitLogsController = HabitLogsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_user_interface_1.RequestUser, check_in_dto_1.HabitLogQueryDto]),
    __metadata("design:returntype", void 0)
], HabitLogsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('process-missed'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_user_interface_1.RequestUser]),
    __metadata("design:returntype", void 0)
], HabitLogsController.prototype, "processMissed", null);
__decorate([
    (0, common_1.Post)('check-in'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_user_interface_1.RequestUser, check_in_dto_1.CheckInDto]),
    __metadata("design:returntype", void 0)
], HabitLogsController.prototype, "checkIn", null);
__decorate([
    (0, common_1.Post)(':habitId/skip'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('habitId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_user_interface_1.RequestUser, String, SkipDto]),
    __metadata("design:returntype", void 0)
], HabitLogsController.prototype, "skip", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_user_interface_1.RequestUser, String, check_in_dto_1.UpdateHabitLogDto]),
    __metadata("design:returntype", void 0)
], HabitLogsController.prototype, "update", null);
exports.HabitLogsController = HabitLogsController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('habit-logs'),
    __metadata("design:paramtypes", [habit_logs_service_1.HabitLogsService])
], HabitLogsController);
//# sourceMappingURL=habit-logs.controller.js.map