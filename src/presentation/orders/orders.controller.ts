import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Post('create')
  async createOrder(@Body() orderData: Order): Promise<Order | string> {
    try {
      return await this.orderService.createOrder(orderData);
    } catch (e) {
      return e;
    }
  }

  @Get('find')
  async getOrders(): Promise<Order[] | string> {
    try {
      return await this.orderService.getOrders();
    } catch (e) {
      return e;
    }
  }

  @Get('find-one')
  async getOrderById(@Query() id: number): Promise<Order | string> {
    try {
      return await this.orderService.getOrderById(id);
    } catch (e) {
      return e;
    }
  }

  @Get('find-rep-orders')
  async getOrdersByRepresentative(
    @Query() id: number,
  ): Promise<Order[] | string> {
    try {
      return await this.orderService.getOrdersByRepresentative(id);
    } catch (e) {
      return e;
    }
  }

  @Get('find-rep-orders')
  async getOrderByRepresentative(
    @Query() id: number,
    idOrder: number,
  ): Promise<Order | string> {
    try {
      return await this.orderService.getOrderByRepresentative(idOrder, id);
    } catch (e) {
      return e;
    }
  }

  @Put('update')
  async updateOrder(@Body() order: Order): Promise<Order | string> {
    try {
      return await this.orderService.updateOrder(order);
    } catch (e) {
      return e;
    }
  }

  @Delete('delete')
  async deleteOrder(@Body() order: Order): Promise<number | string> {
    try {
      return await this.orderService.deleteOrder(order);
    } catch (e) {
      return e;
    }
  }
}
