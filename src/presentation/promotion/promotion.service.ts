import { Inject, Injectable } from "@nestjs/common";
import { Promotion } from "./promotion.entity";
import { Product } from "../products/product.entity";

@Injectable()
export class PromotionService {
  constructor(
    @Inject('PROMOTION_REPOSITORY')
    private promotionRepository: typeof Promotion,
  ) {}

  async createPromotion(promotionData: Promotion): Promise<Promotion | string> {
    try {
      return await this.promotionRepository.create({
        promotionName: promotionData.promotionName,
        promotionStart: promotionData.promotionStart,
        promotionEnd: promotionData.promotionEnd,
        discount: promotionData.discount,
      });
    } catch (e) {
      return e;
    }
  }
}
