import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { SubCategory } from '../sub-category/sub-category.entity';

@Table
export class Category extends Model {
  @Column
  categoryDescription: string;

  @HasMany(() => SubCategory)
  category: SubCategory[];
}
