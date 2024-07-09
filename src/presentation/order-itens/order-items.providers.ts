import { OrderItems } from './order-items.entity';

export const OrderItemsProviders = [
  {
    provide: 'ORDER_ITEMS_REPOSITORY',
    useValue: OrderItems,
  },
];
