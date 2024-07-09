import { SubCategory } from './sub-category.entity';

export const SubCategoryProviders = [
  {
    provide: 'SUB_CATEGORY_REPOSITORY',
    useValue: SubCategory,
  },
];
