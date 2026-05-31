/**
 * Module quản lý thói quen (habit): CRUD, lịch lặp, trạng thái, xóa mềm.
 */
import { Module } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { HabitsController } from './habits.controller';

@Module({
  controllers: [HabitsController],
  providers: [HabitsService],
  exports: [HabitsService],
})
export class HabitsModule {}
