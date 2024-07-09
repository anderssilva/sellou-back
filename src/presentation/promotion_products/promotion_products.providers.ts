import { PromotionProducts } from './promotion_products.entity';

export const PromotionProductProviders = [
  {
    provide: 'PROMOTION_PRODUCTS_REPOSITORY',
    useValue: PromotionProducts,
  },
];
