/**
 * Service kết nối cơ sở dữ liệu qua Prisma ORM.
 * Dùng adapter PostgreSQL; kiểm tra kết nối ngay khi module khởi động
 * để app không chạy nếu DATABASE_URL sai hoặc DB không phản hồi.
 */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'src/generated/prisma/client';

/** Client Prisma có vòng đời gắn với NestJS module. */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  /** Khởi tạo adapter PG và cấu hình log cảnh báo/lỗi từ Prisma. */
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env['DATABASE_URL'],
    });
    super({
      adapter, //
      log: [
        // 'query',
        // 'info',
        'warn',
        'error',
      ],
    });
  }

  /**
   * Hook NestJS — chạy khi module sẵn sàng.
   * Kết nối DB và chạy SELECT 1; ném lỗi nếu thất bại để chặn khởi động app.
   */
  async onModuleInit() {
    try {
      console.log('Testing database connection...');
      await this.$connect();
      // Kiểm tra thực tế bằng truy vấn SQL đơn giản
      await this.$queryRaw`SELECT 1`;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error('Database connection failed:', message);
      throw error; // Ném lỗi để app không start nếu DB sai
    }
  }
}
