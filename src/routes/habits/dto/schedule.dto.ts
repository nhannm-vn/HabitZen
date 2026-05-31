/**
 * DTO lịch lặp thói quen — dùng khi tạo habit và PUT /habits/:id/schedule.
 */
import { ScheduleRepeatType } from 'src/generated/prisma/enums';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsInt,
  IsOptional,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

/** Cấu hình chi tiết theo loại lặp (tuần/tháng/khoảng ngày). */
export class RepeatConfigDto {
  /** Các thứ trong tuần (1=Thứ 2 … 7=Chủ nhật) — bắt buộc khi repeatType weekly. */
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @IsInt({ each: true })
  @Min(1, { each: true })
  @Max(7, { each: true })
  daysOfWeek?: number[];

  /** Các ngày trong tháng (1–31) — bắt buộc khi repeatType monthly. */
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @IsInt({ each: true })
  @Min(1, { each: true })
  @Max(31, { each: true })
  daysOfMonth?: number[];

  /** Lặp mỗi N ngày — dùng cho custom interval. */
  @IsOptional()
  @IsInt()
  @Min(1)
  intervalDays?: number;
}

/** Loại lặp + cấu hình tùy chọn. */
export class ScheduleDto {
  /** Kiểu lặp: daily, weekly, monthly, ... */
  @IsEnum(ScheduleRepeatType)
  repeatType!: ScheduleRepeatType;

  /** Chi tiết ngày lặp — nested validation. */
  @IsOptional()
  @ValidateNested()
  @Type(() => RepeatConfigDto)
  repeatConfig?: RepeatConfigDto;
}
