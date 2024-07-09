import { Module } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { PromotionController } from './promotion.controller';
import { PromotionProviders } from "./promotion.providers";

@Module({
  providers: [PromotionService, ...PromotionProviders],
  controllers: [PromotionController]
})
export class PromotionModule {}
