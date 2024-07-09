import { Module } from '@nestjs/common';
import { OrderItemsController } from './order-items.controller';
import { OrderItemsService } from './order-items.service';
import { OrderItemsProviders } from './order-items.providers';

@Module({
  controllers: [OrderItemsController],
  providers: [OrderItemsService, ...OrderItemsProviders],
})
export class OrderItemsModule {}
