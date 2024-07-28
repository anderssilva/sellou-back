import { Table, Column, Model, HasMany } from "sequelize-typescript";
import { Order } from "../../presentation/orders/order.entity";

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  document: number;

  @Column
  email: string;

  @Column
  phone: number;

  @Column
  city: string;

  @Column
  state: string;

  @Column
  password: string;

  @Column
  idRole: number;

  @HasMany(() => Order)
  orders: Order[];
}
