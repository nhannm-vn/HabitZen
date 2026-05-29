/**
 * DTO đăng ký tài khoản — validate body POST /auth/register.
 */
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

/** Dữ liệu tạo user mới. */
export class RegisterDto {
  /** Email đăng nhập — định dạng email hợp lệ. */
  @IsEmail()
  email!: string;

  /** Mật khẩu — tối thiểu 8 ký tự, tối đa 72 (giới hạn bcrypt). */
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password!: string;

  /** Họ tên hiển thị — bắt buộc, không rỗng, tối đa 100 ký tự. */
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  fullName!: string;

  /** Múi giờ IANA — tùy chọn, mặc định server nếu không gửi. */
  @IsOptional()
  @IsString()
  @MaxLength(50)
  timezone?: string;
}
