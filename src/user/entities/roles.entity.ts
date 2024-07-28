import { Table, Column, Model, HasMany } from "sequelize-typescript";

@Table
export class Role extends Model {
  @Column
  erpCode: number;

  @Column
  office: string;

  @Column
  company: string;

  @Column
  branch: string;

  @Column
  higher: number;

  @Column
  region: string;

  @Column
  subRegion: string;
}
