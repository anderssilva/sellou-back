import { Promotion } from './promotion.entity';

export const PromotionProviders = [
  {
    provide: 'PROMOTION_REPOSITORY',
    useValue: Promotion,
  },
];
