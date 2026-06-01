/**
 * DTO query dashboard — GET /dashboard/today.
 */
import { IsDateString, IsOptional } from 'class-validator';

/** Tham số chọn ngày xem (mặc định hôm nay theo timezone user). */
export class DashboardQueryDto {
  /** Ngày ISO (YYYY-MM-DD) — tùy chọn. */
  @IsOptional()
  @IsDateString()
  date?: string;
}
