import { Module } from '@nestjs/common';
import { PromotionProductsService } from './promotion_products.service';
import { PromotionProductsController } from './promotion_products.controller';
import { Promotion } from "../promotion/promotion.entity";
import { SequelizeModule } from "@nestjs/sequelize";
import { Product } from "../products/product.entity";
import { PromotionProducts } from "./promotion_products.entity";
import { PromotionProviders } from "../promotion/promotion.providers";
import { PromotionProductProviders } from "./promotion_products.providers";
import { ProductProviders } from "../products/product.providers";

@Module({
  providers: [PromotionProductsService, ...PromotionProductProviders, ...PromotionProviders, ...ProductProviders],
  controllers: [PromotionProductsController]
})
export class PromotionProductsModule {}
