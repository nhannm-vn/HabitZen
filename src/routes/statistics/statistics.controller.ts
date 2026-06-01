/**
 * Controller REST thống kê hoàn thành và streak.
 */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { RequestUser } from 'src/common/interfaces/request-user.interface';
import { IsDateString, IsOptional } from 'class-validator';
import { ApiBearerAuth } from '@nestjs/swagger';

/** Query from/to cho GET period và habit stats — mặc định 30 ngày gần nhất. */
class StatsQueryDto {
  /** Ngày bắt đầu khoảng thống kê (YYYY-MM-DD). */
  @IsOptional()
  @IsDateString()
  from?: string;

  /** Ngày kết thúc khoảng thống kê (YYYY-MM-DD). */
  @IsOptional()
  @IsDateString()
  to?: string;
}

/** API prefix: /statistics */
@ApiBearerAuth('access-token')
@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  /** Tổng quan: hôm nay, tuần, top streak. */
  @Get('overview')
  overview(@CurrentUser() user: RequestUser) {
    return this.statisticsService.getOverview(user.id, user.timezone);
  }

  /** Thống kê theo khoảng ngày (mặc định 30 ngày). */
  @Get('period')
  period(@CurrentUser() user: RequestUser, @Query() query: StatsQueryDto) {
    const to = query.to ?? new Date().toISOString().slice(0, 10);
    const from =
      query.from ??
      new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
    return this.statisticsService.getByPeriod(user.id, from, to);
  }

  /** Thống kê một habit trong khoảng ngày. */
  @Get('habits/:habitId')
  habitStats(
    @CurrentUser() user: RequestUser,
    @Param('habitId') habitId: string,
    @Query() query: StatsQueryDto,
  ) {
    const to = query.to ?? new Date().toISOString().slice(0, 10);
    const from =
      query.from ??
      new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
    return this.statisticsService.getHabitStats(user.id, habitId, from, to);
  }
}
