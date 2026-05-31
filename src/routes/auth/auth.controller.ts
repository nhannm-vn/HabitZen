/**
 * Controller REST cho luồng xác thực và hồ sơ người dùng.
 * Các route register/login là public; các route /me yêu cầu JWT.
 */
import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { Public } from 'src/common/decorators/public.decorator';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { RequestUser } from 'src/common/interfaces/request-user.interface';
import { ApiBearerAuth } from '@nestjs/swagger';

/** API prefix: /auth */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /** Đăng ký tài khoản mới — không cần token. */
  @Public()
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  /** Đăng nhập — trả access token và thông tin user. */
  @Public()
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  /** Lấy hồ sơ người dùng đang đăng nhập. */
  @ApiBearerAuth('access-token')
  @Get('me')
  getMe(@CurrentUser() user: RequestUser) {
    return this.authService.getProfile(user.id);
  }

  /** Cập nhật tên hiển thị hoặc múi giờ. */
  @ApiBearerAuth('access-token')
  @Patch('me')
  updateMe(@CurrentUser() user: RequestUser, @Body() dto: UpdateProfileDto) {
    return this.authService.updateProfile(user.id, dto);
  }

  /** Đổi mật khẩu — cần mật khẩu hiện tại. */
  @ApiBearerAuth('access-token')
  @Post('change-password')
  changePassword(
    @CurrentUser() user: RequestUser,
    @Body() dto: ChangePasswordDto,
  ) {
    return this.authService.changePassword(user.id, dto);
  }
}
//
