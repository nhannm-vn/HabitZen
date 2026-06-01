/**
 * Controller REST admin — bảo vệ bởi @Roles(UserRole.admin) trên toàn controller.
 */
import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRole } from 'src/generated/prisma/enums';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { RequestUser } from 'src/common/interfaces/request-user.interface';
import { UpdateUserStatusDto, AdminUserQueryDto } from './dto/admin.dto';
import { AdminService } from './admin.service';

@Roles(UserRole.admin)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  /** Danh sách user (role user), phân trang và tìm theo email/tên. */
  @Get('users')
  listUsers(@Query() query: AdminUserQueryDto) {
    return this.adminService.listUsers(query);
  }

  /** Chi tiết một user kèm số habit. */
  @Get('users/:id')
  getUser(@Param('id') id: string) {
    return this.adminService.getUser(id);
  }

  /** Khóa/mở khóa tài khoản user — không cho khóa chính admin đang đăng nhập. */
  @Patch('users/:id/status')
  updateStatus(
    @CurrentUser() admin: RequestUser,
    @Param('id') id: string,
    @Body() dto: UpdateUserStatusDto,
  ) {
    return this.adminService.updateUserStatus(admin.id, id, dto);
  }

  /** Thống kê tổng quan hệ thống (users, habits). */
  @Get('statistics')
  systemStats() {
    return this.adminService.getSystemStats();
  }

  /** Nhật ký hành động admin — phân trang. */
  @Get('logs')
  adminLogs(@Query() query: AdminUserQueryDto) {
    return this.adminService.getAdminLogs(query.page, query.limit);
  }
}
