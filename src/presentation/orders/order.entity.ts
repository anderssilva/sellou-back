import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Order extends Model {
  @Column
  Client: number;

  @Column
  priceTable: number;

  @Column
  orderStatus: number;

  @Column
  paymentTerms: number;

  @Column
  representativeCod: number;

  @Column
  validityOrder: Date;

  @Column
  bilingDate: Date;

  @Column
  bilingType: string;

  @Column
  authorizedDiscount: number;

  @Column
  flexDiscount: number;

  @Column
  firstDiscount: number;

  @Column
  secondDiscount: number;
}
