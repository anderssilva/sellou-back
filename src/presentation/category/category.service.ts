import { Inject, Injectable } from '@nestjs/common';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: typeof Category,
  ) {}

  async createCategory(categoryData: Category): Promise<Category> {
    return await this.categoryRepository.create({
      categoryDescription: categoryData.categoryDescription,
    });
  }

  async findCategories(): Promise<Category[]> {
    return await this.categoryRepository.findAll();
  }
}
