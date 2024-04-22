import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class PriceTable extends Model {
  @Column
  codTable: number;

  @Column
  productGroup: string;

  @Column
  subProductGroup: string;

  @Column
  cashPrice: number;

  @Column
  termPrice: number;

  @Column
  stockBranch: string;

  @Column
  unity: string;

  @Column
  price: number;

  @Column
  discount: number;

  @Column
  addPrice: number;

  @Column
  ecommerce: boolean;

  @Column
  flexPrice: number;

  @Column
  ecommerceDiscount: string;

  @Column
  reference: string;

  @Column
  creationDate: Date;

  @Column
  phoneNumber: number;

  @Column
  secondPhoneNumber: number;

  @Column
  whatsapp: number;

  @Column
  contact: number;

  @Column
  email: string;

  @Column
  shoppingEmail: string;

  @Column
  invoiceEmail: string;

  @Column
  billEmail: string;

  @Column
  site: string;

  @Column
  group: string;

  @Column
  headquarterCod: string;

  @Column
  observations: string;

  @Column
  defaultPayment: string;

  @Column
  shipmentObservation: string;

  @Column
  typeUserCod: string;

  @Column
  typeUser: string;

  @Column
  userGroupCod: string;

  @Column
  latitude: string;

  @Column
  longitude: string;

  @Column
  region: string;

  @Column
  partial: boolean;

  @Column
  creditSituation: string;

  @Column
  creditLimit: number;

  @Column
  creditAnalysisObservation: string;

  @Column
  serasaStatus: boolean;

  @Column
  lakeDate: Date;

  @Column
  score: number;

  @Column
  deliveryDays: string;

  @Column
  deliveryHours: string;

  @Column
  inactivationDate: Date;

  @Column
  branch: string;

  @Column
  minimumOrder: number;
}
