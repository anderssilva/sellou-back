import { Inject, Injectable } from '@nestjs/common';
import { PaymentCondition } from './payment-condition.entity';

@Injectable()
export class PaymentConditionService {
  constructor(
    @Inject('PAYMENT_CONDITION_REPOSITORY')
    private paymentConditionRepository: typeof PaymentCondition,
  ) {}

  async createPaymentCondition(
    paymentConditionData: PaymentCondition,
  ): Promise<PaymentCondition> {
    try {
      return this.paymentConditionRepository.create({
        paymentConditionCod: paymentConditionData.paymentConditionCod,
        validity: paymentConditionData.validity,
        paymentConditionDescription:
          paymentConditionData.paymentConditionDescription,
        mediumTerm: paymentConditionData.mediumTerm,
      });
    } catch (e) {
      return e;
    }
  }

  async getPaymentConditions(): Promise<PaymentCondition[]> {
    try {
      return this.paymentConditionRepository.findAll();
    } catch (e) {
      return e;
    }
  }
}
