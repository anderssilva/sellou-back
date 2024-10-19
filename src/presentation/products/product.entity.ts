import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  BelongsTo, BelongsToMany
} from "sequelize-typescript";
import { SubCategory } from '../sub-category/sub-category.entity';
import { OrderItems } from "../order-itens/order-items.entity";
import { Order } from "../orders/entities/order.entity";
import { Promotion } from "../promotion/promotion.entity";
import { PromotionProducts } from "../promotion_products/promotion_products.entity";

@Table
export class Product extends Model {
  @Column
  productCode: string;

  @Column
  productDescription: string;

  @ForeignKey(() => SubCategory)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  subProductCode: number;

  @Column
  productStatus: boolean;

  @Column
  productType: string;

  @Column
  productLine: string;

  @Column
  productBrand: string;

  @Column
  productDefaultSupplier: string;

  @Column
  sellFractionUnity: boolean;

  @Column
  packedShipment: boolean;

  @Column
  invoiceStockUnit: string;

  @Column
  unit: string;

  @Column
  conversionFactor: string;

  @Column
  netWeight: string;

  @Column
  grossWeight: string;

  @Column
  productMultiple: number;

  @Column
  productDerivation: string;

  @Column
  productPrice: number;

  @BelongsTo(() => SubCategory)
  subCategory: SubCategory;

  @BelongsToMany(() => Order, () => OrderItems)
  orders: Order[];

  @BelongsToMany(() => Promotion, () => PromotionProducts)
  promotions: Promotion[];
}
