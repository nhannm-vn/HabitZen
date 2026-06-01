/**
 * Module nhắc nhở thói quen — CRUD reminder và API lấy danh sách due trong ngày.
 */
import { Module } from '@nestjs/common';
import { RemindersController } from './reminders.controller';
import { RemindersService } from './reminders.service';

@Module({
  controllers: [RemindersController],
  providers: [RemindersService],
})
export class RemindersModule {}
