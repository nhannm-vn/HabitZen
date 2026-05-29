/**
 * DTO đổi mật khẩu — validate body POST /auth/change-password.
 */
import { IsString, MinLength } from 'class-validator';

/** Mật khẩu hiện tại và mật khẩu mới. */
export class ChangePasswordDto {
  /** Mật khẩu đang dùng — bắt buộc để xác minh danh tính. */
  @IsString()
  @MinLength(1)
  currentPassword!: string;

  /** Mật khẩu mới — tối thiểu 8 ký tự (độ mạnh kiểm tra thêm ở service). */
  @IsString()
  @MinLength(8)
  newPassword!: string;
}
