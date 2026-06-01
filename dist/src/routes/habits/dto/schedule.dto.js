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
exports.ScheduleDto = exports.RepeatConfigDto = void 0;
const enums_1 = require("../../../generated/prisma/enums");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class RepeatConfigDto {
    daysOfWeek;
    daysOfMonth;
    intervalDays;
}
exports.RepeatConfigDto = RepeatConfigDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.Min)(1, { each: true }),
    (0, class_validator_1.Max)(7, { each: true }),
    __metadata("design:type", Array)
], RepeatConfigDto.prototype, "daysOfWeek", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsInt)({ each: true }),
    (0, class_validator_1.Min)(1, { each: true }),
    (0, class_validator_1.Max)(31, { each: true }),
    __metadata("design:type", Array)
], RepeatConfigDto.prototype, "daysOfMonth", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], RepeatConfigDto.prototype, "intervalDays", void 0);
class ScheduleDto {
    repeatType;
    repeatConfig;
}
exports.ScheduleDto = ScheduleDto;
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.ScheduleRepeatType),
    __metadata("design:type", String)
], ScheduleDto.prototype, "repeatType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => RepeatConfigDto),
    __metadata("design:type", RepeatConfigDto)
], ScheduleDto.prototype, "repeatConfig", void 0);
//# sourceMappingURL=schedule.dto.js.map