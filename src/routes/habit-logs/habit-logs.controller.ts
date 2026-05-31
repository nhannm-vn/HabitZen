/**
 * Controller REST cho nhật ký check-in thói quen.
 * Gồm check-in, skip, cập nhật log và batch xử lý ngày missed.
 */
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  CheckInDto,
  HabitLogQueryDto,
  UpdateHabitLogDto,
} from './dto/check-in.dto';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { RequestUser } from 'src/common/interfaces/request-user.interface';
import { IsOptional, IsDateString } from 'class-validator';
import { HabitLogsService } from './habit-logs.service';
import { ApiBearerAuth } from '@nestjs/swagger';

/** Body POST /habit-logs/:habitId/skip — ngày skip tùy chọn. */
class SkipDto {
  /** Ngày skip — mặc định hôm nay theo timezone user. */
  @IsOptional()
  @IsDateString()
  logDate?: string;
}

/** API prefix: /habit-logs */
@ApiBearerAuth('access-token')
@Controller('habit-logs')
export class HabitLogsController {
  constructor(private readonly habitLogsService: HabitLogsService) {}

  /** Danh sách log theo habit và/hoặc khoảng ngày. */
  @Get()
  findAll(@CurrentUser() user: RequestUser, @Query() query: HabitLogQueryDto) {
    return this.habitLogsService.findAll(user.id, query);
  }

  /** Quét và đánh dấu missed cho các ngày quá hạn chưa hoàn thành. */
  @Post('process-missed')
  processMissed(@CurrentUser() user: RequestUser) {
    return this.habitLogsService.processMissed(user.id, user.timezone);
  }

  /** Ghi nhận hoàn thành / tiến độ cho một ngày có lịch. */
  @Post('check-in')
  checkIn(@CurrentUser() user: RequestUser, @Body() dto: CheckInDto) {
    return this.habitLogsService.checkIn(user.id, user.timezone, dto);
  }

  /** Đánh dấu bỏ qua (skipped) habit trong ngày. */
  @Post(':habitId/skip')
  skip(
    @CurrentUser() user: RequestUser,
    @Param('habitId') habitId: string,
    @Body() body: SkipDto,
  ) {
    return this.habitLogsService.skip(
      user.id,
      user.timezone,
      habitId,
      body.logDate,
    );
  }

  /** Sửa log đã tồn tại (tiến độ, ghi chú, trạng thái). */
  @Patch(':id')
  update(
    @CurrentUser() user: RequestUser,
    @Param('id') id: string,
    @Body() dto: UpdateHabitLogDto,
  ) {
    return this.habitLogsService.updateLog(user.id, id, dto);
  }
}
