/**
 * DTO tạo danh mục — validate body POST /categories.
 */
import { IsOptional, IsString, Matches, MaxLength } from 'class-validator';

/** Dữ liệu danh mục mới do user tạo. */
export class CreateCategoryDto {
  /** Tên danh mục — bắt buộc, tối đa 100 ký tự. */
  @IsString()
  @MaxLength(100)
  name!: string;

  /** Màu hex (#RRGGBB) — tùy chọn, định dạng 6 chữ số hex. */
  @IsOptional()
  @Matches(/^#[0-9A-Fa-f]{6}$/)
  color?: string;

  /** Tên icon (thư viện UI) — tùy chọn, tối đa 50 ký tự. */
  @IsOptional()
  @IsString()
  @MaxLength(50)
  icon?: string;
}
