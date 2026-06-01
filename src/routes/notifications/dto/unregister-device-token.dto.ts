/**
 * DTO hủy đăng ký FCM token — validate body DELETE /notifications/unregister-token.
 */
import { IsNotEmpty, IsString } from 'class-validator';

/** Dữ liệu hủy FCM token khi user logout khỏi thiết bị. */
export class UnregisterDeviceTokenDto {
  /** FCM token cần xóa — bắt buộc. */
  @IsString()
  @IsNotEmpty({ message: 'fcmToken không được để trống' })
  fcmToken!: string;
}
