import { PaymentForm } from './paymentForm.entity';

export const PaymentFormProviders = [
  {
    provide: 'PAYMENT_FORM_REPOSITORY',
    useValue: PaymentForm,
  },
];
