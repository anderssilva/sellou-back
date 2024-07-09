import { Table, Column, Model, HasMany, BelongsToMany } from "sequelize-typescript";
import { Product } from "../products/product.entity";
import { PromotionProducts } from "../promotion_products/promotion_products.entity";

@Table
export class Promotion extends Model {
  @Column
  promotionName: string;

  @Column
  promotionStart: Date;

  @Column
  promotionEnd: Date;

  @Column
  discount: number;

  @BelongsToMany(() => Product, () => PromotionProducts)
  products: Product[];
}