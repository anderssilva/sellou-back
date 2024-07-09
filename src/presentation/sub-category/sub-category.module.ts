import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryController } from './sub-category.controller';
import { SubCategoryProviders } from './sub-category.providers';

@Module({
  providers: [SubCategoryService, ...SubCategoryProviders],
  controllers: [SubCategoryController],
})
export class SubCategoryModule {}
