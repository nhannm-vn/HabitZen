import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'src/generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
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

  //cách để báo lỗi kết nối DB ngay khi ứng dụng khởi động
  async onModuleInit() {
    try {
      console.log('Testing database connection...');
      await this.$connect();
      // Test bằng query thực
      await this.$queryRaw`SELECT 1`;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error('Database connection failed:', message);
      throw error; // Throw để app không start nếu DB sai
    }
  }
}
