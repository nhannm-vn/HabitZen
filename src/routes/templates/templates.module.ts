/**
 * Module mẫu thói quen người nổi tiếng — xem danh sách và import vào tài khoản user.
 */
import { Module } from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { TemplatesController } from './templates.controller';

@Module({
  controllers: [TemplatesController],
  providers: [TemplatesService],
})
export class TemplatesModule {}
