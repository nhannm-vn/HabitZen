/**
 * Controller REST CRUD danh mục thói quen của user.
 * Mọi route yêu cầu JWT; chỉ thao tác danh mục của user hoặc danh mục hệ thống (đọc).
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { RequestUser } from 'src/common/interfaces/request-user.interface';
import { ApiBearerAuth } from '@nestjs/swagger';

/** API prefix: /categories */
@ApiBearerAuth('access-token')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  /** Liệt kê danh mục hệ thống + danh mục riêng của user. */
  @Get()
  findAll(@CurrentUser() user: RequestUser) {
    return this.categoriesService.findAll(user.id);
  }

  /** Tạo danh mục tùy chỉnh. */
  @Post()
  create(@CurrentUser() user: RequestUser, @Body() dto: CreateCategoryDto) {
    return this.categoriesService.create(user.id, dto);
  }

  /** Sửa tên/màu/icon danh mục riêng (không sửa danh mục hệ thống). */
  @Patch(':id')
  update(
    @CurrentUser() user: RequestUser,
    @Param('id') id: string,
    @Body() dto: UpdateCategoryDto,
  ) {
    return this.categoriesService.update(user.id, id, dto);
  }

  /** Xóa mềm danh mục; chuyển habit sang danh mục "Khác". */
  @Delete(':id')
  remove(@CurrentUser() user: RequestUser, @Param('id') id: string) {
    return this.categoriesService.remove(user.id, id);
  }
}
