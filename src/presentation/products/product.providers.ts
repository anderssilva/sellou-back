import { Product } from './product.entity';

export const ProductProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];
