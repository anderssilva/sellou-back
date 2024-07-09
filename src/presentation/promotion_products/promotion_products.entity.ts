import { Table, Column, Model, HasMany, ForeignKey, DataType } from "sequelize-typescript";
import { Promotion } from "../promotion/promotion.entity";
import { Product } from "../products/product.entity";

@Table
export class PromotionProducts extends Model {
  @ForeignKey(() => Promotion)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  promotionId: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId: number;
}