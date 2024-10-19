import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Order } from '../orders/entities/order.entity';

@Table
export class PriceTable extends Model {
  @Column
  codPriceTable: string;

  @Column
  priceTableDescription: string;

  @HasMany(() => Order)
  orders: Order[];
}
