/**
 * DTO cập nhật danh mục — validate body PATCH /categories/:id.
 * Mọi trường tùy chọn; chỉ gửi field cần đổi.
 */
import { IsOptional, IsString, Matches, MaxLength } from 'class-validator';

/** Các trường có thể sửa trên danh mục riêng của user. */
export class UpdateCategoryDto {
  /** Tên mới — tối đa 100 ký tự. */
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  /** Màu hex (#RRGGBB). */
  @IsOptional()
  @Matches(/^#[0-9A-Fa-f]{6}$/)
  color?: string;

  /** Icon identifier. */
  @IsOptional()
  @IsString()
  @MaxLength(50)
  icon?: string;
}
