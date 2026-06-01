/**
 * Module API đọc streak — liệt kê và xem/tính lại theo habit.
 */
import { Module } from '@nestjs/common';
import { StreaksController } from './streaks.controller';

@Module({
  controllers: [StreaksController],
})
export class StreaksModule {}
