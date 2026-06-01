/**
 * DTO gửi notification thủ công — validate body POST /notifications/send.
 * Chỉ dành cho admin (ADM_BR01).
 */
import {
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

/** Loại notification để mobile điều hướng đúng màn hình. */
export enum NotificationType {
  REMINDER = 'reminder', // Nhắc thực hiện habit (REM_BR09)
  END_OF_DAY = 'end_of_day', // Nhắc cuối ngày (REM_BR08)
  STREAK_MILESTONE = 'streak_milestone', // Chúc mừng streak
  GENERAL = 'general', // Thông báo chung
}

/** Dữ liệu gửi push notification đến một user cụ thể. */
export class SendNotificationDto {
  /** ID user nhận notification — bắt buộc. */
  @IsUUID()
  @IsNotEmpty()
  userId!: string;

  /** Loại notification — bắt buộc. */
  @IsEnum(NotificationType, {
    message: 'type phải là reminder | end_of_day | streak_milestone | general',
  })
  type!: NotificationType;

  /** Tiêu đề notification — bắt buộc. */
  @IsString()
  @IsNotEmpty({ message: 'title không được để trống' })
  title!: string;

  /** Nội dung notification — bắt buộc. */
  @IsString()
  @IsNotEmpty({ message: 'body không được để trống' })
  body!: string;

  /** Data payload để mobile điều hướng màn hình — tùy chọn. */
  @IsOptional()
  @IsObject()
  data?: Record<string, string>;
}
