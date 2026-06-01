/**
 * Controller API dashboard — màn hình "hôm nay".
 */
import { Controller, Get, Query } from '@nestjs/common';
import { DashboardQueryDto } from './dto/dashboard-query.dto';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { RequestUser } from 'src/common/interfaces/request-user.interface';
import { DashboardService } from './dashboard.service';
import { ApiBearerAuth } from '@nestjs/swagger';

/** API prefix: /dashboard */
@ApiBearerAuth('access-token')
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  /** Thói quen có lịch trong ngày + log + thống kê tóm tắt. */
  @Get('today')
  getToday(
    @CurrentUser() user: RequestUser,
    @Query() query: DashboardQueryDto,
  ) {
    return this.dashboardService.getToday(user.id, user.timezone, query.date);
  }
}
