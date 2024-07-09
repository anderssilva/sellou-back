import { Module } from '@nestjs/common';
import { PaymentFormController } from './paymentForm.controller';
import { PaymentFormService } from './paymentForm.service';
import { PaymentFormProviders } from './paymentForm.providers';

@Module({
  controllers: [PaymentFormController],
  providers: [PaymentFormService, ...PaymentFormProviders],
})
export class PaymentFormModule {}
