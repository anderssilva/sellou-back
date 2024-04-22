import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column
  productCode: string;

  @Column
  productDescription: string;

  @Column
  subProductDescription: string;

  @Column
  productStatus: boolean;

  @Column
  productType: string;

  @Column
  productGroup: string;

  @Column
  productSubGroup: string;

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
  invoiceStockUnit: boolean;

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
}
