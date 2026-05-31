/**
 * DTO cập nhật thói quen và đổi trạng thái — PATCH /habits/:id và PATCH .../status.
 */
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  Min,
} from 'class-validator';
import { HabitGoalType, HabitStatus } from 'src/generated/prisma/enums';

/** Các trường metadata habit có thể sửa (không gồm schedule). */
export class UpdateHabitDto {
  /** Tên mới — tối đa 255 ký tự. */
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name?: string;

  /** Mô tả mới. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Loại mục tiêu. */
  @IsOptional()
  @IsEnum(HabitGoalType)
  goalType?: HabitGoalType;

  /** Giá trị mục tiêu số. */
  @IsOptional()
  @IsNumber()
  @Min(0)
  goalValue?: number;

  /** Đơn vị đo. */
  @IsOptional()
  @IsString()
  @MaxLength(30)
  goalUnit?: string;

  /** Gán hoặc bỏ danh mục (null). */
  @IsOptional()
  @IsUUID()
  categoryId?: string | null;

  /** Ngày bắt đầu theo dõi mới. */
  @IsOptional()
  @IsDateString()
  startDate?: string;

  /** Ngày kết thúc — null để bỏ giới hạn. */
  @IsOptional()
  @IsDateString()
  endDate?: string | null;
}

/** Chỉ đổi trạng thái: active, archived, ... */
export class UpdateHabitStatusDto {
  /** Trạng thái habit theo enum HabitStatus. */
  @IsEnum(HabitStatus)
  status!: HabitStatus;
}
