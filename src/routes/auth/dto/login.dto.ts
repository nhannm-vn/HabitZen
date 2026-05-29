/**
 * DTO đăng nhập — validate body POST /auth/login.
 */
import { IsEmail, IsString, MinLength } from 'class-validator';

/** Thông tin đăng nhập email + mật khẩu. */
export class LoginDto {
  /** Email đã đăng ký. */
  @IsEmail()
  email!: string;

  /** Mật khẩu — bắt buộc có ít nhất 1 ký tự. */
  @IsString()
  @MinLength(1)
  password!: string;
}
