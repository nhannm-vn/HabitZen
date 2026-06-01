/**
 * Controller REST nhắc nhở — route lồng dưới habits và route reminders độc lập.
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReminderDto, UpdateReminderDto } from './dto/reminder.dto';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { RequestUser } from 'src/common/interfaces/request-user.interface';
import { RemindersService } from './reminders.service';
import { ApiBearerAuth } from '@nestjs/swagger';

/** Không prefix cố định — dùng path đầy đủ habits/... và reminders/... */
@ApiBearerAuth('access-token')
@Controller()
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  /** Danh sách reminder của một habit. */
  @Get('habits/:habitId/reminders')
  findByHabit(
    @CurrentUser() user: RequestUser,
    @Param('habitId') habitId: string,
  ) {
    return this.remindersService.findByHabit(user.id, habitId);
  }

  /** Thêm reminder cho habit. */
  @Post('habits/:habitId/reminders')
  create(
    @CurrentUser() user: RequestUser,
    @Param('habitId') habitId: string,
    @Body() dto: CreateReminderDto,
  ) {
    return this.remindersService.create(user.id, habitId, dto);
  }

  /** Habit cần nhắc hôm nay (chưa completed, có lịch, có reminder bật). */
  @Get('reminders/due')
  getDue(@CurrentUser() user: RequestUser) {
    return this.remindersService.getDueReminders(user.id, user.timezone);
  }

  /** Sửa giờ nhắc hoặc bật/tắt. */
  @Patch('reminders/:id')
  update(
    @CurrentUser() user: RequestUser,
    @Param('id') id: string,
    @Body() dto: UpdateReminderDto,
  ) {
    return this.remindersService.update(user.id, id, dto);
  }

  /** Xóa mềm reminder. */
  @Delete('reminders/:id')
  remove(@CurrentUser() user: RequestUser, @Param('id') id: string) {
    return this.remindersService.remove(user.id, id);
  }
}
