import { PaymentCondition } from './payment-condition.entity';

export const PaymentConditionProviders = [
  {
    provide: 'PAYMENT_CONDITION_REPOSITORY',
    useValue: PaymentCondition,
  },
];
