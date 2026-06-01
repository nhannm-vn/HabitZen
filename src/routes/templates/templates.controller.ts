/**
 * Controller REST template thói quen — public list/detail; import cần đăng nhập.
 */
import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TemplatesService } from './templates.service';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { RequestUser } from 'src/common/interfaces/request-user.interface';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiBearerAuth } from '@nestjs/swagger';

/** Query GET /templates — lọc độ khó và featured. */
class TemplateQueryDto {
  /** Lọc theo độ khó template. */
  @IsOptional()
  @IsString()
  difficulty?: string;

  /** Chỉ template nổi bật khi true. */
  @IsOptional()
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  featured?: boolean;
}

/** API prefix: /templates */
@ApiBearerAuth('access-token')
@Controller('templates')
export class TemplatesController {
  constructor(private readonly templatesService: TemplatesService) {}

  /** Danh sách template công khai. */
  @Get()
  findAll(@Query() query: TemplateQueryDto) {
    return this.templatesService.findAll(query);
  }

  /** Chi tiết một template kèm các item habit. */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.templatesService.findOne(id);
  }

  /** Sao chép các habit từ template vào tài khoản user. */
  @Post(':id/import')
  import(@CurrentUser() user: RequestUser, @Param('id') id: string) {
    return this.templatesService.importTemplate(user.id, id);
  }
}
