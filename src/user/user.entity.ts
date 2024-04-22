import { Table, Column, Model } from 'sequelize-typescript';

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
}
