/**
 * Service khởi tạo dữ liệu khi ứng dụng start lần đầu.
 * Gieo danh mục mặc định và tạo tài khoản admin từ biến môi trường nếu chưa có.
 */
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { PrismaService } from './prisma.service';
import { CategoriesService } from 'src/routes/categories/categories.service';
import { UserRole } from 'src/generated/prisma/enums';

/** Chạy seed sau khi module shared và categories sẵn sàng. */
@Injectable()
export class BootstrapService implements OnModuleInit {
  private readonly logger = new Logger(BootstrapService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly categoriesService: CategoriesService,
    private readonly config: ConfigService,
  ) {}

  /** Hook khởi động — gọi seed danh mục rồi seed admin. */
  async onModuleInit() {
    await this.categoriesService.seedDefaults();
    await this.seedAdmin();
  }

  /**
   * Tạo user admin từ config (admin.email, admin.password) nếu email chưa tồn tại.
   * Bỏ qua im lặng nếu thiếu email hoặc password trong env.
   */
  private async seedAdmin() {
    const email = this.config.get<string>('admin.email');
    const password = this.config.get<string>('admin.password');
    if (!email || !password) return;

    const existing = await this.prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (existing) return;

    const rounds = this.config.get<number>('bcryptRounds') ?? 10;
    await this.prisma.user.create({
      data: {
        email: email.toLowerCase(),
        passwordHash: await bcrypt.hash(password, rounds),
        fullName: this.config.get<string>('admin.fullName') ?? 'System Admin',
        role: UserRole.admin,
        isActive: true,
      },
    });
    this.logger.log(`Admin account seeded: ${email}`);
  }
}
