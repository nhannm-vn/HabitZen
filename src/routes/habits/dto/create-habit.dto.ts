/**
 * DTO tạo thói quen — validate body POST /habits.
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
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { HabitGoalType } from 'src/generated/prisma/enums';
import { ScheduleDto } from './schedule.dto';

/** Dữ liệu habit mới kèm lịch lặp bắt buộc. */
export class CreateHabitDto {
  /** Tên thói quen — tối đa 255 ký tự. */
  @IsString()
  @MaxLength(255)
  name!: string;

  /** Mô tả tùy chọn. */
  @IsOptional()
  @IsString()
  description?: string;

  /** Loại mục tiêu: boolean, numeric, ... */
  @IsEnum(HabitGoalType)
  goalType!: HabitGoalType;

  /** Giá trị mục tiêu số — khi goalType cần số liệu. */
  @IsOptional()
  @IsNumber()
  @Min(0)
  goalValue?: number;

  /** Đơn vị (bước, phút, ...) — tối đa 30 ký tự. */
  @IsOptional()
  @IsString()
  @MaxLength(30)
  goalUnit?: string;

  /** UUID danh mục — tùy chọn. */
  @IsOptional()
  @IsUUID()
  categoryId?: string;

  /** Ngày bắt đầu theo dõi — ISO date string. */
  @IsDateString()
  startDate!: string;

  /** Ngày kết thúc — tùy chọn. */
  @IsOptional()
  @IsDateString()
  endDate?: string;

  /** Lịch lặp — bắt buộc, validate nested. */
  @ValidateNested()
  @Type(() => ScheduleDto)
  schedule!: ScheduleDto;
}
