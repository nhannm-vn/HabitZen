/**
 * Module quản trị — chỉ role admin; quản lý user, thống kê hệ thống, audit log.
 */
import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
