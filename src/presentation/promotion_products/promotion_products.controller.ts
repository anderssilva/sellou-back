import { Body, Controller, Post } from "@nestjs/common";
import { PromotionProductsService } from './promotion_products.service';

@Controller('promotion-products')
export class PromotionProductsController {
  constructor(private readonly promotionProductsService: PromotionProductsService) {}

  // Endpoint para criar promoção com produtos
  @Post('create')
  async createPromotionWithProducts(
    @Body('promotion') promotionData: any,
    @Body('productIds') productIds: number[],
  ) {
    return this.promotionProductsService.createPromotionWithProducts(promotionData, productIds);
  }
}
