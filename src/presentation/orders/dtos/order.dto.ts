import { IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { OrderItems } from "../../order-itens/order-items.entity";

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  orderStatus: number;
  id?: number;
  validityOrder: Date;
  bilingDate: Date;
  bilingType: string;
  authorizedDiscount: number;
  flexDiscount: number;
  firstDiscount: number;
  secondDiscount: number;
  observationOrder: string;
  paymentConditionId: number;
  representativeId: number;
  clientId: number;
  priceTableId: number;
  paymentFormId: number;

  @ValidateNested({ each: true })
  @Type(() => OrderItems)
  products: OrderItems[];
}
