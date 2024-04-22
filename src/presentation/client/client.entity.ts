import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Client extends Model {
  @Column
  status: boolean;

  @Column
  companyName: string;

  @Column
  companyFantasyName: string;

  @Column
  taxationType: number;

  @Column
  document: string;

  @Column
  cep: string;

  @Column
  stateRegistration: string;

  @Column
  publicPlace: string;

  @Column
  homeNumber: number;

  @Column
  complement: string;

  @Column
  city: string;

  @Column
  UF: string;

  @Column
  neighborhood: string;

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
  ecommerce: boolean;

  @Column
  minimumOrder: number;
}
