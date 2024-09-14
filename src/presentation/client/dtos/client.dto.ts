import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateClientDto {
  @IsNotEmpty({ message: 'O campo status não pode estar vazio' })
  @IsBoolean()
  status: boolean;

  @IsNotEmpty({ message: 'O campo Nome não pode estar vazio' })
  @IsString()
  companyName: string;

  @IsNotEmpty({ message: 'O campo Nome Fantasia não pode estar vazio' })
  @IsString()
  companyFantasyName: string;

  @IsNumber()
  @IsNotEmpty({ message: 'O campo taxationType não pode estar vazio' })
  taxationType: number;

  @IsNotEmpty({ message: 'O campo document não pode estar vazio' })
  @IsString()
  document: string;

  @IsNotEmpty({ message: 'O campo CEP não pode estar vazio' })
  @IsString()
  cep: string;

  @IsNotEmpty({ message: 'O stateRegistration não pode estar vazio' })
  @IsString()
  stateRegistration: string;

  @IsNumber()
  homeNumber: number;

  @IsString()
  complement: string;

  @IsString()
  city: string;

  @IsNotEmpty({ message: 'O UF não pode estar vazio' })
  @IsString()
  UF: string;

  @IsString()
  neighborhood: string;

  @IsString()
  reference: string;

  @IsNumber()
  phoneNumber: number;

  @IsNumber()
  secondPhoneNumber: number;

  @IsNotEmpty({ message: 'O Whatsapp não pode estar vazio' })
  @IsNumber()
  whatsapp: number;

  @IsEmail({}, { message: 'Email no formato inválido' })
  @IsNotEmpty({ message: 'O campo email não pode estar vazio' })
  email: string;

  @IsEmail({}, { message: 'shoppingEmail no formato inválido' })
  @IsNotEmpty({ message: 'O campo shoppingEmail não pode estar vazio' })
  shoppingEmail: string;

  @IsEmail({}, { message: 'invoiceEmail no formato inválido' })
  @IsNotEmpty({ message: 'O campo invoiceEmail não pode estar vazio' })
  invoiceEmail: string;

  @IsEmail({}, { message: 'billEmail no formato inválido' })
  @IsNotEmpty({ message: 'O campo billEmail não pode estar vazio' })
  billEmail: string;

  @IsString()
  site: string;

  @IsString()
  group: string;

  @IsString()
  headquarterCod: string;

  @IsString()
  observations: string;

  @IsString()
  defaultPayment: string;

  @IsString()
  shipmentObservation: string;

  @IsString()
  typeUserCod: string;

  @IsString()
  typeUser: string;

  @IsString()
  userGroupCod: string;

  @IsString()
  latitude: string;

  @IsString()
  longitude: string;

  @IsString()
  region: string;

  @IsBoolean()
  partial: boolean;

  @IsString()
  creditSituation: string;

  @IsNumber()
  creditLimit: number;

  @IsString()
  creditAnalysisObservation: string;

  @IsBoolean()
  serasaStatus: boolean;

  lakeDate: Date;

  @IsNumber()
  score: number;

  @IsString()
  deliveryDays: string;

  @IsString()
  deliveryHours: string;

  inactivationDate: Date;

  @IsString()
  branch: string;

  @IsBoolean()
  ecommerce: boolean;

  @IsNumber()
  minimumOrder: number;
}
