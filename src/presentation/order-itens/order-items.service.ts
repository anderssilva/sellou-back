import { Inject, Injectable } from '@nestjs/common';
import { OrderItems } from './order-items.entity';

@Injectable()
export class OrderItemsService {
  constructor(
    @Inject('ORDER_ITEMS_REPOSITORY')
    private orderItemsRepository: typeof OrderItems,
  ) {}

  async createOrderItems(
    orderItemsData: OrderItems,
  ): Promise<OrderItems | string> {
    try {
      return await this.orderItemsRepository.create({
        productId: orderItemsData.productId,
        itemPrice: orderItemsData.itemPrice,
        itemAmount: orderItemsData.itemAmount,
        orderId: orderItemsData.orderId,
        tablePrice: orderItemsData.tablePrice,
        paymentTerms: orderItemsData.paymentTerms,
        weightTotalPrice: orderItemsData.weightTotalPrice,
        itemDiscount: orderItemsData.itemDiscount,
        conditionPaymentCod: orderItemsData.conditionPaymentCod,
      });
    } catch (e) {
      return e;
    }
  }

  async getOrderItemById(id: number): Promise<OrderItems> {
    try {
      return await this.orderItemsRepository.findByPk(id);
    } catch (e) {
      return e;
    }
  }

  async getOrderItems(): Promise<OrderItems[]> {
    try {
      return await this.orderItemsRepository.findAll();
    } catch (e) {
      return e;
    }
  }

  async deleteOrderItem(id: number): Promise<number | string> {
    try {
      return await this.orderItemsRepository.destroy({ where: { id: id } });
    } catch (e) {
      return e;
    }
  }
}
