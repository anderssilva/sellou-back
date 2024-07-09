import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Order } from '../orders/order.entity';

@Table
export class PaymentForm extends Model {
  @Column
  paymentFormCod: number;

  @Column
  paymentFormDescription: string;

  @HasMany(() => Order)
  orders: Order[];
}
