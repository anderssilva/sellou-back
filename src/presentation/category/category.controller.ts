import { Body, Controller, Get, Post } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Post('create')
  async createCategory(
    @Body() categoryData: Category,
  ): Promise<Category | string> {
    try {
      return await this.categoryService.createCategory(categoryData);
    } catch (e) {
      return e;
    }
  }

  @Get('find')
  async findCategories(): Promise<Category[] | string> {
    try {
      return await this.categoryService.findCategories();
    } catch (e) {
      return e;
    }
  }
}
