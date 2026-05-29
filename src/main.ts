import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  // Tạo instance NestJS từ module gốc (gom tất cả feature modules)
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  // Prefix mặc định: /api/v1 — mobile gọi http://host:3000/api/v1/...
  const apiPrefix = config.get<string>('apiPrefix') ?? 'api/v1';
  const port = config.get<number>('port') ?? 3000;

  app.setGlobalPrefix(apiPrefix);

  // Cho phép app mobile (React Native / Flutter) gọi API từ origin khác
  app.enableCors({
    origin: true,
    credentials: true,
  });

  /**
   * ValidationPipe: tự động validate body/query theo class-validator trên DTO.
   * - whitelist: loại field không khai báo trong DTO (bảo mật mass assignment)
   * - forbidNonWhitelisted: trả lỗi nếu client gửi field thừa
   * - transform: chuyển string query → number khi DTO có @Type(() => Number)
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  await app.listen(port);
  console.log(`HabitZen API running at http://localhost:${port}/${apiPrefix}`);
}
bootstrap();
