import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Promotion } from "../promotion/promotion.entity";
import { Product } from "../products/product.entity";
import { PromotionProducts } from "./promotion_products.entity";
import { Order } from "../orders/entities/order.entity";

@Injectable()
export class PromotionProductsService {
  constructor(
    @Inject('PROMOTION_REPOSITORY')
    private promotionModel: typeof Promotion,
    @Inject('PROMOTION_PRODUCTS_REPOSITORY')
    private promotionProductModel: typeof PromotionProducts,
    @Inject('PRODUCT_REPOSITORY')
    private product: typeof Product,
  ) {}

  async createPromotionWithProducts(promotionData: Promotion, productIds: number[]): Promise<Promotion> {
    const promotion = await this.promotionModel.create({
      promotionName: promotionData.promotionName,
      promotionStart: promotionData.promotionStart,
      promotionEnd: promotionData.promotionEnd,
      discount: promotionData.discount
    });

    for (const productId of productIds) {
      await this.promotionProductModel.create({
        promotionId: promotion.id,
        productId,
      });
    }

    return promotion;
  }
}
