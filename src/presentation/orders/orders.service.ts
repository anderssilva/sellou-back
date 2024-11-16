import { Inject, Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dtos/order.dto';
import * as jwt from 'jsonwebtoken';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'jwt.constants';
import { OrderItems } from '../order-itens/order-items.entity';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class OrdersService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject('ORDER_REPOSITORY')
    private orderRepository: typeof Order,
    @Inject('ORDER_ITEMS_REPOSITORY') private readonly orderItemsRepository: typeof OrderItems,
  ) {}

  async createOrder(orderData: CreateOrderDto, token: string): Promise<Order | string> {
    try {
      const decodedToken = jwt.verify(token, jwtConstants.secret);
      orderData.representativeId = decodedToken['r'];

      if(orderData?.id) {
        let order = await this.orderRepository.findOne({
          where: { id: orderData?.id }
        });

        await this.orderRepository.update(orderData, {
          where: { id: orderData.id }
        });

        await this.orderItemsRepository.destroy({
          where: { orderId: order.id }
        });

        const items = orderData.products.map((result) => ({
          ...result,
          orderId:   order.id
        }))

        await this.orderItemsRepository.bulkCreate(items)

        return order;

      } else {
        let order = await this.orderRepository.create({
          ...orderData
        });

        await this.orderItemsRepository.destroy({
          where: { orderId: order.id }
        });

        const items = orderData.products.map((result) => ({
          ...result,
          orderId:   order.id
        }))

        await this.orderItemsRepository.bulkCreate(items)

        return order;
      }
    } catch (e: any) {
      return e.message;
    }
  }

  async getOrders(): Promise<Order[] | string> {
    try {
      return await this.orderRepository.findAll({ include: { all: true } })
    } catch (e) {
      return e;
    }
  }

  async getOrderById(id: number): Promise<Order> {
    try {
      return await this.orderRepository.findOne({
        where: { id: id },
        include: [{ model: OrderItems }]
      });
    } catch (e) {
      return e;
    }
  }

  async getOrdersByRepresentative(id: number): Promise<Order[] | string> {
    try {
      return await this.orderRepository.findAll({
        where: { representativeCod: id },
      });
    } catch (e) {
      return e;
    }
  }

  async getOrderByRepresentative(
    idOrder: number,
    id: number,
  ): Promise<Order | string> {
    try {
      return await this.orderRepository.findOne({
        where: { representativeCod: id, id: idOrder },
      });
    } catch (e) {
      return e;
    }
  }

  async updateOrder(order: Order): Promise<Order | string> {
    try {
      return await this.orderRepository
        .findOne({
          where: { representativeCod: order.representativeId, id: order.id },
        })
        .then((result) => {
          return result.update(order);
        });
    } catch (e) {
      return e;
    }
  }

  async deleteOrder(order: Order): Promise<number | string> {
    try {
      return await this.orderRepository.destroy({
        where: { representativeCod: order.representativeId, id: order.id },
      });
    } catch (e) {
      return e;
    }
  }

  async gerLastOrderByRep(id: number): Promise<Order | string> {
    try {
      const order = await this.orderRepository.findOne({
        where: { clientId: id },
        order: [['id', 'DESC']],
        include: [{ all: true }]
      });
      return order || 'No order found';
    } catch (e) {
      return e.message || e.toString();
    }
  }
}

