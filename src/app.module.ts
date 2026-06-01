import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AppConfigModule } from './config/config.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './routes/auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { GlobalExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { CategoriesModule } from './routes/categories/categories.module';
import { HabitsModule } from './routes/habits/habits.module';
import { HabitLogsModule } from './routes/habit-logs/habit-logs.module';
import { DashboardModule } from './routes/dashboard/dashboard.module';
import { RemindersModule } from './routes/reminders/reminders.module';
import { StreaksModule } from './routes/streaks/streaks.module';

@Module({
  imports: [
    AppConfigModule,
    SharedModule, //
    AuthModule,
    CategoriesModule,
    HabitsModule,
    HabitLogsModule,
    DashboardModule,
    RemindersModule,
    StreaksModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Guard JWT: mọi route mặc định cần token, trừ khi gắn @Public()
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    // Guard role: kiểm tra @Roles(admin) trên route admin
    { provide: APP_GUARD, useClass: RolesGuard },
    // Bắt mọi exception → JSON chuẩn { success: false, error: { code, message } }
    { provide: APP_FILTER, useClass: GlobalExceptionFilter },
    // Bọc response thành công → { success: true, data, timestamp }
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
  ],
})
export class AppModule {}
