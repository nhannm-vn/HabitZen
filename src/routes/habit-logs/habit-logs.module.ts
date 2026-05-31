/**
 * Module nhật ký thói quen: check-in, skip, cập nhật log, xử lý ngày bỏ lỡ.
 */
import { Module } from '@nestjs/common';
import { HabitLogsController } from './habit-logs.controller';
import { HabitLogsService } from './habit-logs.service';

@Module({
  controllers: [HabitLogsController],
  providers: [HabitLogsService],
})
export class HabitLogsModule {}
