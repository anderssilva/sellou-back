import { Body, Controller, Post } from "@nestjs/common";
import { PromotionService } from "./promotion.service";
import { Promotion } from "./promotion.entity";

@Controller('promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Post('create')
  async createProduct(@Body() promotionData: Promotion): Promise<Promotion | string> {
    try {
      return await this.promotionService.createPromotion(promotionData);
    } catch (e) {
      return e;
    }
  }


}
