/**
 * Controller REST quản lý thói quen.
 * Hỗ trợ lọc theo status/category; cập nhật lịch qua PUT schedule riêng.
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto, UpdateHabitStatusDto } from './dto/update-habit.dto';
import { ScheduleDto } from './dto/schedule.dto';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { RequestUser } from 'src/common/interfaces/request-user.interface';
import { HabitStatus } from 'src/generated/prisma/enums';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { HabitsService } from './habits.service';

/** Query string cho GET /habits — lọc theo trạng thái và danh mục. */
class HabitQueryDto {
  /** Lọc theo trạng thái habit (active, archived, ...). */
  @IsOptional()
  @IsEnum(HabitStatus)
  status?: HabitStatus;

  /** Lọc theo UUID danh mục. */
  @IsOptional()
  @IsUUID()
  categoryId?: string;
}

/** API prefix: /habits */
@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  /** Danh sách habit của user, có thể lọc. */
  @Get()
  findAll(@CurrentUser() user: RequestUser, @Query() query: HabitQueryDto) {
    return this.habitsService.findAll(user.id, query);
  }

  /** Tạo habit + schedule + bản ghi streak ban đầu. */
  @Post()
  create(@CurrentUser() user: RequestUser, @Body() dto: CreateHabitDto) {
    return this.habitsService.create(user.id, dto);
  }

  /** Chi tiết một habit kèm category, schedule, streak, reminders. */
  @Get(':id')
  findOne(@CurrentUser() user: RequestUser, @Param('id') id: string) {
    return this.habitsService.findOne(user.id, id);
  }

  /** Cập nhật metadata habit (không đổi lịch ở đây). */
  @Patch(':id')
  update(
    @CurrentUser() user: RequestUser,
    @Param('id') id: string,
    @Body() dto: UpdateHabitDto,
  ) {
    return this.habitsService.update(user.id, id, dto);
  }

  /** Đổi trạng thái active/archived. */
  @Patch(':id/status')
  updateStatus(
    @CurrentUser() user: RequestUser,
    @Param('id') id: string,
    @Body() dto: UpdateHabitStatusDto,
  ) {
    return this.habitsService.updateStatus(user.id, id, dto);
  }

  /** Thay thế hoặc tạo lịch lặp cho habit. */
  @Put(':id/schedule')
  updateSchedule(
    @CurrentUser() user: RequestUser,
    @Param('id') id: string,
    @Body() dto: ScheduleDto,
  ) {
    return this.habitsService.updateSchedule(user.id, id, dto);
  }

  /** Xóa mềm (archive) habit. */
  @Delete(':id')
  remove(@CurrentUser() user: RequestUser, @Param('id') id: string) {
    return this.habitsService.remove(user.id, id);
  }
}
