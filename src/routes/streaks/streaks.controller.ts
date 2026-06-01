/**
 * Controller REST streak — danh sách và chi tiết theo habit (có tính lại trước khi trả).
 */
import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { StreakService } from 'src/shared/services/streak.service';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { RequestUser } from 'src/common/interfaces/request-user.interface';
import { OwnershipService } from 'src/shared/services/ownership.service';
import { ApiBearerAuth } from '@nestjs/swagger';

/** API prefix: /streaks */
@ApiBearerAuth('access-token')
@Controller('streaks')
export class StreaksController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly streakService: StreakService,
    private readonly ownership: OwnershipService,
  ) {}

  /** Tất cả streak của user, sắp xếp theo currentStreak giảm dần. */
  @Get()
  findAll(@CurrentUser() user: RequestUser) {
    return this.prisma.streak.findMany({
      where: { userId: user.id, deletedAt: null },
      include: { habit: { select: { id: true, name: true, status: true } } },
      orderBy: { currentStreak: 'desc' },
    });
  }

  /**
   * Streak của một habit — recalculate trước khi đọc để dữ liệu đồng bộ với log mới nhất.
   */
  @Get('habits/:habitId')
  async findByHabit(
    @CurrentUser() user: RequestUser,
    @Param('habitId') habitId: string,
  ) {
    await this.ownership.assertHabitOwner(habitId, user.id);
    await this.streakService.recalculateForHabit(habitId, user.id);
    return this.prisma.streak.findUnique({
      where: { habitId },
      include: { habit: { select: { id: true, name: true } } },
    });
  }
}
