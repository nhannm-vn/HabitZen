"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const config_module_1 = require("./config/config.module");
const shared_module_1 = require("./shared/shared.module");
const auth_module_1 = require("./routes/auth/auth.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const jwt_auth_guard_1 = require("./common/guards/jwt-auth.guard");
const roles_guard_1 = require("./common/guards/roles.guard");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
const categories_module_1 = require("./routes/categories/categories.module");
const habits_module_1 = require("./routes/habits/habits.module");
const habit_logs_module_1 = require("./routes/habit-logs/habit-logs.module");
const dashboard_module_1 = require("./routes/dashboard/dashboard.module");
const reminders_module_1 = require("./routes/reminders/reminders.module");
const streaks_module_1 = require("./routes/streaks/streaks.module");
const statistics_module_1 = require("./routes/statistics/statistics.module");
const templates_module_1 = require("./routes/templates/templates.module");
const admin_module_1 = require("./routes/admin/admin.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.AppConfigModule,
            shared_module_1.SharedModule,
            auth_module_1.AuthModule,
            categories_module_1.CategoriesModule,
            habits_module_1.HabitsModule,
            habit_logs_module_1.HabitLogsModule,
            dashboard_module_1.DashboardModule,
            reminders_module_1.RemindersModule,
            streaks_module_1.StreaksModule,
            statistics_module_1.StatisticsModule,
            templates_module_1.TemplatesModule,
            admin_module_1.AdminModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_GUARD, useClass: jwt_auth_guard_1.JwtAuthGuard },
            { provide: core_1.APP_GUARD, useClass: roles_guard_1.RolesGuard },
            { provide: core_1.APP_FILTER, useClass: http_exception_filter_1.GlobalExceptionFilter },
            { provide: core_1.APP_INTERCEPTOR, useClass: transform_interceptor_1.TransformInterceptor },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map