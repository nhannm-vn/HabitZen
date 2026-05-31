/**
 * DTO check-in, cập nhật log và query danh sách log — /habit-logs.
 */
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { HabitLogStatus } from 'src/generated/prisma/enums';

/** Body POST /habit-logs/check-in */
export class CheckInDto {
  /** UUID thói quen cần ghi nhận. */
  @IsUUID()
  habitId!: string;

  /** Ngày log (YYYY-MM-DD) — mặc định hôm nay theo timezone user. */
  @IsOptional()
  @IsDateString()
  logDate?: string;

  /** Tiến độ số (bước, phút...) — dùng với goalType numeric. */
  @IsOptional()
  @IsNumber()
  @Min(0)
  progressValue?: number;

  /** Ghi chú tùy chọn. */
  @IsOptional()
  @IsString()
  note?: string;

  /** Ghi đè trạng thái — thường để service tự suy từ progress. */
  @IsOptional()
  @IsEnum(HabitLogStatus)
  status?: HabitLogStatus;
}

/** Body PATCH /habit-logs/:id */
export class UpdateHabitLogDto {
  /** Tiến độ số mới. */
  @IsOptional()
  @IsNumber()
  @Min(0)
  progressValue?: number;

  /** Ghi chú mới. */
  @IsOptional()
  @IsString()
  note?: string;

  /** Trạng thái log mới. */
  @IsOptional()
  @IsEnum(HabitLogStatus)
  status?: HabitLogStatus;
}

/** Query GET /habit-logs */
export class HabitLogQueryDto {
  /** Lọc theo một habit. */
  @IsOptional()
  @IsUUID()
  habitId?: string;

  /** Ngày bắt đầu khoảng (inclusive). */
  @IsOptional()
  @IsDateString()
  from?: string;

  /** Ngày kết thúc khoảng (inclusive). */
  @IsOptional()
  @IsDateString()
  to?: string;

  /** Lọc đúng một ngày (ưu tiên hơn from/to khi set). */
  @IsOptional()
  @IsDateString()
  date?: string;
}
