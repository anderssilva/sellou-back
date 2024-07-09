import { Inject, Injectable } from '@nestjs/common';
import { PaymentForm } from './paymentForm.entity';

@Injectable()
export class PaymentFormService {
  constructor(
    @Inject('PAYMENT_FORM_REPOSITORY')
    private paymentFormRepository: typeof PaymentForm,
  ) {}

  async createPaymentForm(
    paymentFormData: PaymentForm,
  ): Promise<PaymentForm | string> {
    try {
      return await this.paymentFormRepository.create({
        paymentFormDescription: paymentFormData.paymentFormDescription,
      });
    } catch (e) {
      return e;
    }
  }

  async getPaymentForms(): Promise<PaymentForm[] | string> {
    try {
      return await this.paymentFormRepository.findAll();
    } catch (e) {
      return e;
    }
  }
}
