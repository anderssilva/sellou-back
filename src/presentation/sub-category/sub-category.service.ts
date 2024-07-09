import { Inject, Injectable } from '@nestjs/common';
import { SubCategory } from './sub-category.entity';
import { Category } from '../category/category.entity';
import { Product } from '../products/product.entity';

@Injectable()
export class SubCategoryService {
  constructor(
    @Inject('SUB_CATEGORY_REPOSITORY')
    private subCategoryRepository: typeof SubCategory,
  ) {}

  async createSubCategory(
    subCategoryData: SubCategory,
  ): Promise<SubCategory | string> {
    try {
      return await this.subCategoryRepository.create({
        categoryCode: subCategoryData.categoryCode,
        subCategoryDescription: subCategoryData.subCategoryDescription,
      });
    } catch (e) {
      return e;
    }
  }

  async findSubCategoriesBy(id: number): Promise<SubCategory[] | string> {
    try {
      return await this.subCategoryRepository.findAll({
        where: { categoryCode: id },
      });
    } catch (e) {
      return e;
    }
  }

  async findSubCategories(): Promise<any | string> {
    try {
      return await this.subCategoryRepository.findAll({
        include: [{ model: Category }],
      });
    } catch (e) {
      return e;
    }
  }

  async findSubCategoriesProducts(id: number): Promise<any | string> {
    try {
      return await this.subCategoryRepository.findAll({
        where: { id: id },
        include: [{ model: Product }],
      });
    } catch (e) {
      return e;
    }
  }
}
