/**
 * DTO tạo và cập nhật nhắc nhở — validate giờ HH:mm hoặc HH:mm:ss.
 */
import { IsBoolean, IsOptional, Matches } from 'class-validator';

/** Body POST habits/:habitId/reminders */
export class CreateReminderDto {
  /** Giờ nhắc — định dạng 24h, ví dụ 08:30 hoặc 08:30:00. */
  @Matches(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/)
  remindAt!: string;

  /** Bật nhắc ngay khi tạo — mặc định true ở service nếu không gửi. */
  @IsOptional()
  @IsBoolean()
  isEnabled?: boolean;
}

/** Body PATCH reminders/:id */
export class UpdateReminderDto {
  /** Giờ nhắc mới. */
  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/)
  remindAt?: string;

  /** Bật/tắt nhắc. */
  @IsOptional()
  @IsBoolean()
  isEnabled?: boolean;
}
