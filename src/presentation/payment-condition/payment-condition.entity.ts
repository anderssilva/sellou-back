import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Order } from '../orders/entities/order.entity';

@Table
export class PaymentCondition extends Model {
  @Column
  paymentConditionCod: string;

  @Column
  validity: Date;

  @Column
  paymentConditionDescription: string;

  @Column
  mediumTerm: string;

  @HasMany(() => Order)
  orders: Order[];
}
