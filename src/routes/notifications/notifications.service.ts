/** * Service thông báo đẩy: quản lý FCM token, cron gửi reminder theo giờ, * nhắc cuối ngày, gửi notification thủ công. */ import {
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'src/shared/services/prisma.service';
import { BusinessException } from 'src/common/exceptions/business.exception';
import { ErrorCodes } from 'src/common/constants/error-codes';
import { RegisterDeviceTokenDto } from './dto/register-device-token.dto';
import { UnregisterDeviceTokenDto } from './dto/unregister-device-token.dto';
import {
  SendNotificationDto,
  NotificationType,
} from './dto/send-notification.dto';
import { DateTime } from 'luxon';
import firebaseAdmin from 'src/config/firebase.config';
import type {
  Reminder,
  Habit,
  Schedule,
  HabitLog,
} from 'src/generated/prisma/client';
@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);
  constructor(private readonly prisma: PrismaService) {}
  async registerDeviceToken(userId: string, dto: RegisterDeviceTokenDto) {
    const token = await this.prisma.userDeviceToken.upsert({
      where: { userId_fcmToken: { userId, fcmToken: dto.fcmToken } },
      update: {
        isActive: true,
        deviceType: dto.deviceType,
        deletedAt: null,
        updatedAt: new Date(),
      },
      create: {
        userId,
        fcmToken: dto.fcmToken,
        deviceType: dto.deviceType ?? 'mobile',
        isActive: true,
      },
    });
    this.logger.log(`FCM token đã đăng ký: userId=${userId}`);
    return token;
  }
  async unregisterDeviceToken(userId: string, dto: UnregisterDeviceTokenDto) {
    const token = await this.prisma.userDeviceToken.findUnique({
      where: { userId_fcmToken: { userId, fcmToken: dto.fcmToken } },
    });
    if (!token || token.deletedAt) {
      throw new BusinessException(
        ErrorCodes.NOT_FOUND,
        'Token không tồn tại',
        HttpStatus.NOT_FOUND,
      );
    }
    await this.prisma.userDeviceToken.update({
      where: { userId_fcmToken: { userId, fcmToken: dto.fcmToken } },
      data: { isActive: false, deletedAt: new Date() },
    });
    return { message: 'Token đã được hủy đăng ký' };
  }
  async sendToUser(dto: SendNotificationDto) {
    const sent = await this.pushToUser(dto.userId, {
      title: dto.title,
      body: dto.body,
      data: { type: dto.type, ...dto.data },
    });
    return { message: `Đã gửi notification đến ${sent} thiết bị` };
  }
  @Cron('* * * * *') async processScheduledReminders() {
    this.logger.debug('[CRON] Kiểm tra reminder đến hạn...');
    const reminders = await this.prisma.reminder.findMany({
      where: {
        isEnabled: true,
        deletedAt: null,
        habit: { deletedAt: null, status: 'active' },
      },
      include: {
        habit: { include: { schedule: true } },
        user: { select: { id: true, timezone: true } },
      },
    });
    for (const reminder of reminders) {
      try {
        await this.evaluateAndSend(reminder);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        this.logger.error(`Lỗi xử lý reminder ${reminder.id}: ${message}`);
      }
    }
  }
  @Cron('0 * * * *') async processEndOfDayReminders() {
    this.logger.debug('[CRON] Kiểm tra nhắc cuối ngày...');
    const users = await this.prisma.user.findMany({
      where: { isActive: true, deletedAt: null },
      select: { id: true, timezone: true },
    });
    const END_OF_DAY_HOUR = 21;
    for (const user of users) {
      const tz = user.timezone ?? 'Asia/Ho_Chi_Minh';
      if (DateTime.now().setZone(tz).hour !== END_OF_DAY_HOUR) {
        continue;
      }
      try {
        await this.sendEndOfDayReminders(user.id, tz);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        this.logger.error(`Lỗi nhắc cuối ngày userId=${user.id}: ${message}`);
      }
    }
  }
  private async evaluateAndSend(
    reminder: Reminder & {
      habit: Habit & { schedule: Schedule | null };
      user: { id: string; timezone?: string } | null;
    },
  ): Promise<void> {
    const tz = reminder.user?.timezone ?? 'Asia/Ho_Chi_Minh';
    const now = DateTime.now().setZone(tz);
    const remindAtDate: Date = reminder.remindAt;
    if (
      now.hour !== remindAtDate.getUTCHours() ||
      now.minute !== remindAtDate.getUTCMinutes()
    ) {
      return;
    }
    if (
      !this.isScheduledToday(
        reminder.habit.schedule,
        reminder.habit.startDate,
        reminder.habit.endDate,
        tz,
      )
    ) {
      return;
    }
    const todayLog = await this.prisma.habitLog.findFirst({
      where: {
        habitId: reminder.habitId,
        logDate: new Date(now.toISODate()!),
        deletedAt: null,
      },
      select: { status: true },
    });
    if (todayLog?.status === 'completed') {
      return;
    }
    await this.pushToUser(reminder.userId, {
      title: '⏰ Đừng quên thói quen hôm nay!',
      body: `Đã đến giờ "${reminder.habit.name}" rồi. Hãy hoàn thành nhé!`,
      data: {
        type: NotificationType.REMINDER,
        habitId: reminder.habitId,
        screen: 'HabitDetail',
      },
    });
  }
  private async sendEndOfDayReminders(userId: string, timezone: string) {
    const todayStr = DateTime.now().setZone(timezone).toISODate()!;
    const pendingLogs: (HabitLog & {
      habit: Habit & { schedule: Schedule | null };
    })[] = await this.prisma.habitLog.findMany({
      where: {
        userId,
        logDate: new Date(todayStr),
        status: 'pending',
        deletedAt: null,
        habit: { status: 'active', deletedAt: null },
      },
      include: { habit: { include: { schedule: true } } },
    });
    for (const log of pendingLogs) {
      if (
        !this.isScheduledToday(
          log.habit.schedule,
          log.habit.startDate,
          log.habit.endDate,
          timezone,
        )
      ) {
        continue;
      }
      await this.pushToUser(userId, {
        title: '🌙 Sắp hết ngày rồi!',
        body: `"${log.habit.name}" vẫn chưa hoàn thành. Còn kịp không?`,
        data: {
          type: NotificationType.END_OF_DAY,
          habitId: log.habitId,
          screen: 'HabitDetail',
        },
      });
    }
  }
  private async pushToUser(
    userId: string,
    payload: { title: string; body: string; data?: Record<string, string> },
  ): Promise<number> {
    const tokens = await this.prisma.userDeviceToken.findMany({
      where: { userId, isActive: true, deletedAt: null },
      select: { id: true, fcmToken: true },
    });
    if (!tokens.length) {
      return 0;
    }
    let sentCount = 0;
    for (const { id, fcmToken } of tokens) {
      try {
        await firebaseAdmin.messaging().send({
          token: fcmToken,
          notification: { title: payload.title, body: payload.body },
          data: payload.data ?? {},
          android: { priority: 'high' },
          apns: { payload: { aps: { sound: 'default' } } },
        });
        sentCount++;
      } catch (err: unknown) {
        const code =
          typeof err === 'object' && err !== null && 'code' in err
            ? (err as { code?: unknown }).code
            : undefined;
        if (
          code === 'messaging/registration-token-not-registered' ||
          code === 'messaging/invalid-registration-token'
        ) {
          this.logger.warn(`Token không hợp lệ, đang xóa: tokenId=${id}`);
          await this.prisma.userDeviceToken.update({
            where: { id },
            data: { isActive: false, deletedAt: new Date() },
          });
        } else {
          const message = err instanceof Error ? err.message : String(err);
          this.logger.error(`FCM gửi thất bại tokenId=${id}: ${message}`);
        }
      }
    }
    return sentCount;
  }
  private isScheduledToday(
    schedule: Schedule | null,
    startDate: Date,
    endDate: Date | null,
    timezone: string,
  ): boolean {
    if (!schedule) {
      return false;
    }
    const now = DateTime.now().setZone(timezone);
    const todayIso = now.toISODate()!;
    if (todayIso < DateTime.fromJSDate(startDate).toISODate()!) {
      return false;
    }
    if (endDate && todayIso > DateTime.fromJSDate(endDate).toISODate()!) {
      return false;
    }
    const { repeatType, repeatConfig } = schedule;
    type RepeatConfig = {
      daysOfWeek?: number[];
      daysOfMonth?: number[];
      intervalDays?: number;
    };
    const rc = (repeatConfig ?? {}) as unknown as RepeatConfig;
    switch (repeatType) {
      case 'daily':
        return true;
      case 'weekly': {
        const days: number[] = rc.daysOfWeek ?? [];
        return days.includes(now.weekday);
      }
      case 'monthly': {
        const dates: number[] = rc.daysOfMonth ?? [];
        return dates.includes(now.day);
      }
      case 'custom': {
        const intervalDays: number = rc.intervalDays ?? 1;
        const start = DateTime.fromJSDate(startDate).setZone(timezone);
        const diff = now.startOf('day').diff(start.startOf('day'), 'days').days;
        return diff >= 0 && diff % intervalDays === 0;
      }
      default:
        return false;
    }
  }
}
