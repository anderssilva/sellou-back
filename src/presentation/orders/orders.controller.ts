import {
  Headers,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query, Param
} from "@nestjs/common";
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from "./dtos/order.dto";

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Post('create')
  async createOrder(
    @Body() orderData: CreateOrderDto,
    @Headers('Authorization') authHeader: string): Promise<Order | string> {
    try {
      const token = authHeader.split(' ')[1];
      return await this.orderService.createOrder(orderData, token);
    } catch (e: any) {
      return e.message;
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
  async getOrderById(@Query()  params: { id: number }): Promise<Order> {
    try {
      return await this.orderService.getOrderById(params.id);
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

  @Get('find-last')
  async gerLastOrderByRep(@Query() params: any): Promise<Order | string> {
    try {
      return await this.orderService.gerLastOrderByRep(params.id);
    } catch (e) {
      return e;
    }
  }
}
