import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaymentForm } from './paymentForm.entity';
import { PaymentFormService } from './paymentForm.service';

@Controller('payment-form')
export class PaymentFormController {
  constructor(private readonly paymentFormService: PaymentFormService) {}
  @Post('create')
  createPaymentForm(
    @Body() paymentFormData: PaymentForm,
  ): Promise<PaymentForm | string> {
    try {
      return this.paymentFormService.createPaymentForm(paymentFormData);
    } catch (e) {
      return e;
    }
  }

  @Get('find')
  getPaymentForms(): Promise<PaymentForm[] | string> {
    try {
      return this.paymentFormService.getPaymentForms();
    } catch (e) {
      return e;
    }
  }
}
