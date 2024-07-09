import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { Category } from '../category/category.entity';
import { Product } from '../products/product.entity';

@Table
export class SubCategory extends Model {
  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryCode: number;

  @Column
  subCategoryDescription: string;

  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => Product)
  products: Product[];
}
