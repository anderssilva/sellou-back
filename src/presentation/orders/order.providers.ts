import { Order } from './entities/order.entity';
import { OrderItems } from "../order-itens/order-items.entity";

export const OrderProviders = [
  {
    provide: 'ORDER_REPOSITORY',
    useValue: Order,
  },
  {
    provide: 'ORDER_ITEMS_REPOSITORY',
    useValue: OrderItems,
  },
];
