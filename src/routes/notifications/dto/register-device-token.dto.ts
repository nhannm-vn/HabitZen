/**
 * DTO đăng ký FCM token — validate body POST /notifications/register-token.
 */
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum DeviceType {
  ANDROID = 'android',
  IOS = 'ios',
  MOBILE = 'mobile',
}

/** Dữ liệu đăng ký FCM device token khi mobile login / app khởi động. */
export class RegisterDeviceTokenDto {
  /** FCM token do Firebase SDK cấp trên thiết bị — bắt buộc. */
  @IsString()
  @IsNotEmpty({ message: 'fcmToken không được để trống' })
  fcmToken!: string;

  /** Loại thiết bị — tùy chọn, mặc định mobile. */
  @IsOptional()
  @IsEnum(DeviceType, {
    message: 'deviceType phải là android | ios | mobile',
  })
  deviceType?: DeviceType;
}
