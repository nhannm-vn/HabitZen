/**
 * Module quản lý danh mục thói quen (category).
 * Export CategoriesService để SharedModule/BootstrapService seed danh mục mặc định.
 */
import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService],
})
export class CategoriesModule {}
