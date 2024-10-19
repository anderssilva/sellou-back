import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { JwtModule } from '@nestjs/jwt';
import { OrdersService } from './orders.service';
import { OrderProviders } from './order.providers';
import { OrderItemsProviders } from "../order-itens/order-items.providers";

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, ...OrderProviders, ...OrderItemsProviders],
})
export class OrdersModule {}
