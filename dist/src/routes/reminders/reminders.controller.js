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
exports.RemindersController = void 0;
const common_1 = require("@nestjs/common");
const reminder_dto_1 = require("./dto/reminder.dto");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const request_user_interface_1 = require("../../common/interfaces/request-user.interface");
const reminders_service_1 = require("./reminders.service");
const swagger_1 = require("@nestjs/swagger");
let RemindersController = class RemindersController {
    remindersService;
    constructor(remindersService) {
        this.remindersService = remindersService;
    }
    findByHabit(user, habitId) {
        return this.remindersService.findByHabit(user.id, habitId);
    }
    create(user, habitId, dto) {
        return this.remindersService.create(user.id, habitId, dto);
    }
    getDue(user) {
        return this.remindersService.getDueReminders(user.id, user.timezone);
    }
    update(user, id, dto) {
        return this.remindersService.update(user.id, id, dto);
    }
    remove(user, id) {
        return this.remindersService.remove(user.id, id);
    }
};
exports.RemindersController = RemindersController;
__decorate([
    (0, common_1.Get)('habits/:habitId/reminders'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('habitId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_user_interface_1.RequestUser, String]),
    __metadata("design:returntype", void 0)
], RemindersController.prototype, "findByHabit", null);
__decorate([
    (0, common_1.Post)('habits/:habitId/reminders'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('habitId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_user_interface_1.RequestUser, String, reminder_dto_1.CreateReminderDto]),
    __metadata("design:returntype", void 0)
], RemindersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('reminders/due'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_user_interface_1.RequestUser]),
    __metadata("design:returntype", void 0)
], RemindersController.prototype, "getDue", null);
__decorate([
    (0, common_1.Patch)('reminders/:id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_user_interface_1.RequestUser, String, reminder_dto_1.UpdateReminderDto]),
    __metadata("design:returntype", void 0)
], RemindersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('reminders/:id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_user_interface_1.RequestUser, String]),
    __metadata("design:returntype", void 0)
], RemindersController.prototype, "remove", null);
exports.RemindersController = RemindersController = __decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [reminders_service_1.RemindersService])
], RemindersController);
//# sourceMappingURL=reminders.controller.js.map