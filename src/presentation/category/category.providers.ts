import { Category } from './category.entity';

export const CategoryProviders = [
  {
    provide: 'CATEGORY_REPOSITORY',
    useValue: Category,
  },
];
