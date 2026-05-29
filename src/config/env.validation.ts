/**
 * Validate biến môi trường bắt buộc TRƯỚC KHI app chạy.
 * Nếu thiếu DATABASE_URL → throw Error, tránh crash giữa chừng khi gọi DB.
 */
import { plainToInstance } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  validateSync,
} from 'class-validator';

class EnvironmentVariables {
  @IsOptional()
  @IsString()
  NODE_ENV?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  PORT?: number;

  /** Chuỗi kết nối PostgreSQL — bắt buộc */
  @IsNotEmpty()
  @IsString()
  DATABASE_URL!: string;

  /** Secret ký JWT — nên set rõ trong production */
  @IsOptional()
  @IsString()
  JWT_SECRET?: string;

  @IsOptional()
  @IsString()
  JWT_EXPIRES_IN?: string;
}

export function validateEnv(config: Record<string, unknown>) {
  const validated = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validated, { skipMissingProperties: false });
  if (errors.length > 0) {
    throw new Error(
      `Environment validation failed:\n${errors
        .map((e) => Object.values(e.constraints ?? {}).join(', '))
        .join('\n')}`,
    );
  }
  return config;
}
