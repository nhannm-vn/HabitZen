import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

/**
 * Query phân trang dùng chung (admin list users, logs, ...).
 */
export class PaginationQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 20;
}

/** Cắt mảng trong bộ nhớ — đủ cho quy mô admin; có thể đổi sang skip/take Prisma sau */
export function paginate<T>(items: T[], page = 1, limit = 20) {
  const total = items.length;
  const start = (page - 1) * limit;
  const data = items.slice(start, start + limit);
  return {
    items: data,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit) || 1,
    },
  };
}
