import { Table, Column, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import { PaymentForm } from "../paymentForm/paymentForm.entity";
import { Order } from "../orders/entities/order.entity";
import { Product } from "../products/product.entity";

@Table
export class OrderItems extends Model {

  @Column
  productDerivation: string;

  @Column
  productDescription: string;

  @Column
  itemDiscount: number;

  @Column
  productPrice: number;

  @Column
  itemAmount: number;

  @Column
  netTotalPrice: number;

  @Column
  weightTotalPrice: number;

  @ForeignKey(() => Order)
  @Column
  orderId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @BelongsTo(() => Order)
  order: Order;
}
