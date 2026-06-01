/**
 * DTO quản trị — khóa/mở user và query phân trang danh sách.
 */
import { IsBoolean, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

/** Body PATCH /admin/users/:id/status */
export class UpdateUserStatusDto {
  /** true = mở khóa, false = khóa tài khoản. */
  @IsBoolean()
  isActive!: boolean;
}

/** Query cho GET /admin/users và GET /admin/logs */
export class AdminUserQueryDto {
  /** Trang hiện tại — số nguyên >= 1, mặc định 1. */
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  /** Số bản ghi mỗi trang — mặc định 20. */
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 20;

  /** Tìm theo email hoặc fullName (contains, không phân biệt hoa thường). */
  @IsOptional()
  search?: string;
}
