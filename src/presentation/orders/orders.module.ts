import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrderProviders } from './order.providers';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, ...OrderProviders],
})
export class OrdersModule {}
