import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategory } from './sub-category.entity';

@Controller('apr-sub-category')
export class SubCategoryController {
  constructor(private readonly subCategoryService: SubCategoryService) {}
  @Post('create')
  async createSubCategory(
    @Body() subCategoryData: SubCategory,
  ): Promise<SubCategory | string> {
    try {
      return await this.subCategoryService.createSubCategory(subCategoryData);
    } catch (e) {
      return e;
    }
  }

  @Get('find-by-id')
  async getSubCategoriesById(
    @Query() params: any,
  ): Promise<SubCategory[] | string> {
    try {
      return this.subCategoryService.findSubCategoriesBy(params.id);
    } catch (e) {
      return e;
    }
  }

  @Get('find')
  async getSubCategories(): Promise<SubCategory[] | string> {
    try {
      return this.subCategoryService.findSubCategories();
    } catch (e) {
      return e;
    }
  }

  @Get('find-products')
  async getSubCategoriesProducts(
    @Query() params: any,
  ): Promise<SubCategory[] | string> {
    try {
      return this.subCategoryService.findSubCategoriesProducts(params.id);
    } catch (e) {
      return e;
    }
  }
}
