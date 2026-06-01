import { Body, Controller, Delete, Post, UseGuards } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { RegisterDeviceTokenDto } from './dto/register-device-token.dto';
import { UnregisterDeviceTokenDto } from './dto/unregister-device-token.dto';
import { SendNotificationDto } from './dto/send-notification.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
@UseGuards(JwtAuthGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  /** * Đăng ký FCM token — mobile gọi khi login hoặc app khởi động. * POST /notifications/register-token */ @Post(
    'register-token',
  )
  async registerToken(
    @CurrentUser('id') userId: string,
    @Body() dto: RegisterDeviceTokenDto,
  ) {
    const data = await this.notificationsService.registerDeviceToken(
      userId,
      dto,
    );
    return { success: true, data, timestamp: new Date() };
  }
  /** * Hủy FCM token — mobile gọi khi user logout để dừng nhận notification. * DELETE /notifications/unregister-token */ @Delete(
    'unregister-token',
  )
  async unregisterToken(
    @CurrentUser('id') userId: string,
    @Body() dto: UnregisterDeviceTokenDto,
  ) {
    const data = await this.notificationsService.unregisterDeviceToken(
      userId,
      dto,
    );
    return { success: true, data, timestamp: new Date() };
  }
  /** * Gửi notification thủ công — chỉ admin (ADM_BR01). * POST /notifications/send */ @Post(
    'send',
  )
  @UseGuards(RolesGuard)
  @Roles('admin')
  async send(@Body() dto: SendNotificationDto) {
    const data = await this.notificationsService.sendToUser(dto);
    return { success: true, data, timestamp: new Date() };
  }
}
