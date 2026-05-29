/**
 * DTO cập nhật hồ sơ — validate body PATCH /auth/me.
 * Tất cả trường đều tùy chọn; chỉ cập nhật field được gửi lên.
 */
import { IsOptional, IsString, MaxLength } from 'class-validator';

/** Các trường profile có thể sửa. */
export class UpdateProfileDto {
  /** Tên hiển thị mới — tối đa 100 ký tự. */
  @IsOptional()
  @IsString()
  @MaxLength(100)
  fullName?: string;

  /** Múi giờ — tối đa 50 ký tự (ví dụ Asia/Ho_Chi_Minh). */
  @IsOptional()
  @IsString()
  @MaxLength(50)
  timezone?: string;
}
