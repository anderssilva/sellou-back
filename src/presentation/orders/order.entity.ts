import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo, BelongsToMany
} from "sequelize-typescript";
import { PaymentCondition } from '../payment-condition/payment-condition.entity';
import { User } from '../../user/entities/user.entity';
import { Client } from '../client/client.entity';
import { PriceTable } from "../priceTables/priceTable.entity";
import { PaymentForm } from "../paymentForm/paymentForm.entity";
import { OrderItems } from "../order-itens/order-items.entity";
import { Product } from "../products/product.entity";

@Table
export class Order extends Model {
  @Column
  orderStatus: number;

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

  @Column
  observationOrder: string;

  @ForeignKey(() => PaymentCondition)
  @Column
  paymentConditionId: number;

  @BelongsTo(() => PaymentCondition)
  paymentCondition: PaymentCondition;

  @ForeignKey(() => User)
  @Column
  representativeId: number;

  @BelongsTo(() => User)
  representative: User;

  @ForeignKey(() => Client)
  @Column
  clientId: number;

  @BelongsTo(() => Client)
  client: Client;

  @ForeignKey(() => PriceTable)
  @Column
  priceTableId: number;

  @BelongsTo(() => PriceTable)
  priceTable: PriceTable;

  @ForeignKey(() => PaymentForm)
  @Column
  paymentFormId: number;

  @BelongsTo(() => PaymentForm)
  paymentForm: PaymentForm;

  @BelongsToMany(() => Product, () => OrderItems)
  products: Product[];
}
