/**
 * Prisma 7 yêu cầu kiểu InputJsonValue cho cột JSON.
 * Helper cast object DTO → kiểu Prisma chấp nhận (repeatConfig, metadata admin log).
 */
import { Prisma } from 'src/generated/prisma/client';

export function toJsonValue(
  value: Record<string, unknown> | undefined | null,
): Prisma.InputJsonValue | undefined {
  if (value === undefined || value === null) return undefined;
  return value as Prisma.InputJsonValue;
}
