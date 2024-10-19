import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { Order } from '../orders/entities/order.entity';
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

@Table
export class Client extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ allowNull: false, defaultValue: false  })
  @IsNotEmpty({ message: 'O campo status não pode estar vazio' })
  @IsString()
  @IsBoolean()
  status: boolean;

  @Column
  @IsNotEmpty({ message: 'O campo Nome não pode estar vazio' })
  @IsString()
  companyName: string;

  @Column
  @IsNotEmpty({ message: 'O campo Nome Fantasia não pode estar vazio' })
  @IsString()
  companyFantasyName: string;

  @Column
  @IsNumber()
  @IsNotEmpty({ message: 'O campo taxationType não pode estar vazio' })
  taxationType: number;

  @Column
  @IsNotEmpty({ message: 'O campo document não pode estar vazio' })
  @IsString()
  document: string;

  @Column
  @IsNotEmpty({ message: 'O campo CEP não pode estar vazio' })
  @IsString()
  cep: string;

  @Column
  @IsNotEmpty({ message: 'O stateRegistration não pode estar vazio' })
  @IsString()
  stateRegistration: string;

  @Column
  @IsNumber()
  homeNumber: number;

  @Column
  @IsString()
  complement: string;

  @Column
  @IsString()
  city: string;

  @Column
  @IsNotEmpty({ message: 'O UF não pode estar vazio' })
  @IsString()
  UF: string;

  @Column
  @IsString()
  neighborhood: string;

  @Column
  @IsString()
  reference: string;

  @Column({ type: 'BIGINT', allowNull: false })
  phoneNumber: number;

  @Column
  @Column({ type: 'BIGINT', allowNull: false })
  secondPhoneNumber: number;

  @Column
  @IsNotEmpty({ message: 'O Whatsapp não pode estar vazio' })
  @IsNumber()
  whatsapp: number;

  @Column

  @IsNotEmpty({ message: 'O campo email não pode estar vazio' })
  @IsEmail({}, { message: 'Email no formato inválido' })
  email: string;

  @Column
  @IsNotEmpty({ message: 'O campo shoppingEmail não pode estar vazio' })
  @IsEmail({}, { message: 'shoppingEmail no formato inválido' })
  shoppingEmail: string;

  @Column
  @IsNotEmpty({ message: 'O campo invoiceEmail não pode estar vazio' })
  @IsEmail({}, { message: 'invoiceEmail no formato inválido' })
  invoiceEmail: string;

  @Column
  @IsNotEmpty({ message: 'O campo billEmail não pode estar vazio' })
  @IsEmail({}, { message: 'billEmail no formato inválido' })
  billEmail: string;

  @Column
  @IsString()
  site: string;

  @Column
  @IsString()
  group: string;

  @Column
  @IsString()
  headquarterCod: string;

  @Column
  @IsString()
  observations: string;

  @Column
  @IsString()
  defaultPayment: string;

  @Column
  @IsString()
  shipmentObservation: string;

  @Column
  @IsString()
  typeUserCod: string;

  @Column
  @IsString()
  typeUser: string;

  @Column
  @IsString()
  userGroupCod: string;

  @Column
  @IsString()
  latitude: string;

  @Column
  @IsString()
  longitude: string;

  @Column
  @IsString()
  region: string;

  @Column
  @IsBoolean()
  partial: boolean;

  @Column
  @IsString()
  creditSituation: string;

  @Column
  @Column({ type: 'BIGINT', allowNull: false })
  creditLimit: number;

  @Column
  @IsString()
  creditAnalysisObservation: string;

  @Column
  @IsString()
  serasaStatus: boolean;

  @Column
  lakeDate: Date;

  @Column
  @IsNumber()
  score: number;

  @Column
  @IsString()
  deliveryDays: string;

  @Column
  @IsString()
  deliveryHours: string;

  @Column
  inactivationDate: Date;

  @Column
  @IsString()
  branch: string;

  @Column
  @IsBoolean()
  ecommerce: boolean;

  @Column
  @IsNumber()
  minimumOrder: number;

  @HasMany(() => Order)
  orders: Order[];
}
