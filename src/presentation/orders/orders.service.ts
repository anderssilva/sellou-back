import { Inject, Injectable } from '@nestjs/common';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private orderRepository: typeof Order,
  ) {}

  async createOrder(orderData: Order): Promise<Order | string> {
    try {
      return await this.orderRepository.create({
        Client: orderData.Client,
      });
    } catch (e) {
      return e;
    }
  }

  async getOrders(): Promise<Order[] | string> {
    try {
      return await this.orderRepository.findAll();
    } catch (e) {
      return e;
    }
  }

  async getOrderById(id: number): Promise<Order | string> {
    try {
      return await this.orderRepository.findOne({ where: { id: id } });
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
          where: { representativeCod: order.representativeCod, id: order.id },
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
        where: { representativeCod: order.representativeCod, id: order.id },
      });
    } catch (e) {
      return e;
    }
  }
}
