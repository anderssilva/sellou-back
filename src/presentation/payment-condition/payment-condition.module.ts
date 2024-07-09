import { Module } from '@nestjs/common';
import { PaymentConditionController } from './payment-condition.controller';
import { PaymentConditionService } from './payment-condition.service';
import { PaymentConditionProviders } from './payment-condition.providers';

@Module({
  controllers: [PaymentConditionController],
  providers: [PaymentConditionService, ...PaymentConditionProviders],
})
export class PaymentConditionModule {}
