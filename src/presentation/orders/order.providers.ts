import { Order } from './order.entity';

export const ClientProviders = [
  {
    provide: 'ORDER_REPOSITORY',
    useValue: Order,
  },
];
