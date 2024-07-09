import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryProviders } from './category.providers';

@Module({
  providers: [CategoryService, ...CategoryProviders],
  controllers: [CategoryController],
})
export class CategoryModule {}
