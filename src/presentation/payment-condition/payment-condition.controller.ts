import { Controller, Post, Get, Body } from '@nestjs/common';
import { PaymentConditionService } from './payment-condition.service';
import { PaymentCondition } from './payment-condition.entity';

@Controller('payment-condition')
export class PaymentConditionController {
  constructor(
    private readonly paymentConditionService: PaymentConditionService,
  ) {}
  @Post('create')
  async createPaymentConditionService(
    @Body() paymentConditionData: PaymentCondition,
  ): Promise<PaymentCondition | string> {
    try {
      return await this.paymentConditionService.createPaymentCondition(
        paymentConditionData,
      );
    } catch (e) {
      return e;
    }
  }
  @Get('find')
  async getPaymentCondition(): Promise<PaymentCondition[] | string> {
    try {
      return this.paymentConditionService.getPaymentConditions();
    } catch (e) {
      return e;
    }
  }
}
