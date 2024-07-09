import { Table, Column, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import { PaymentForm } from "../paymentForm/paymentForm.entity";
import { Order } from "../orders/order.entity";
import { Product } from "../products/product.entity";

@Table
export class OrderItems extends Model {
  @Column
  conditionPaymentCod: string;

  @Column
  paymentTerms: string;

  @Column
  productDerivation: string;

  @Column
  productDescription: string;

  @Column
  productCod: string;

  @Column
  tablePrice: string;

  @Column
  itemDiscount: number;

  @Column
  itemPrice: number;

  @Column
  itemAmount: number;

  @Column
  netTotalPrice: number;

  @Column
  weightTotalPrice: number;

  @BelongsTo(() => Order)
  paymentForm: Order;

  @ForeignKey(() => Order)
  @Column
  orderId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;
}
