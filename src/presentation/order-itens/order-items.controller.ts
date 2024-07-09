import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { OrderItems } from './order-items.entity';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemService: OrderItemsService) {}
  @Post('create')
  async createOrderItems(
    @Body()
    orderItemsData: OrderItems,
  ): Promise<OrderItems | string> {
    try {
      return this.orderItemService.createOrderItems(orderItemsData);
    } catch (e) {
      return e;
    }
  }

  @Get('find-one')
  async getOrderItemById(@Query() id: number): Promise<OrderItems> {
    try {
      return await this.orderItemService.getOrderItemById(id);
    } catch (e) {
      return e;
    }
  }

  @Get('find-all')
  async getOrderItems(): Promise<OrderItems[]> {
    try {
      return await this.orderItemService.getOrderItems();
    } catch (e) {
      return e;
    }
  }

  @Delete('remove')
  async deleteOrderItem(@Query() id: number): Promise<number | string> {
    try {
      return await this.orderItemService.deleteOrderItem(id);
    } catch (e) {
      return e;
    }
  }
}
