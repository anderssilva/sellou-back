import { Module } from '@nestjs/common';
import { databaseProviders } from '../database.providers';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './presentation/category/category.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { CrmModule } from './crm/crm.module';
import { ClientModule } from './presentation/client/client.module';
import { ClientController } from './presentation/client/client.controller';
import { ClientProviders } from './presentation/client/client.providers';
import { ClientService } from './presentation/client/client.service';
import { OrderProviders } from './presentation/orders/order.providers';
import { OrdersModule } from './presentation/orders/orders.module';
import { PriceTableModule } from './presentation/priceTables/priceTable.module';
import { PriceTableProviders } from './presentation/priceTables/priceTable.providers';
import { PriceTableController } from './presentation/priceTables/priceTable.controller';
import { PriceTableService } from './presentation/priceTables/priceTable.service';
import { PaymentFormModule } from './presentation/paymentForm/paymentForm.module';
import { PaymentFormController } from './presentation/paymentForm/paymentForm.controller';
import { PaymentFormProviders } from './presentation/paymentForm/paymentForm.providers';
import { PaymentFormService } from './presentation/paymentForm/paymentForm.service';
import { PaymentConditionModule } from './presentation/payment-condition/payment-condition.module';
import { PaymentConditionController } from './presentation/payment-condition/payment-condition.controller';
import { PaymentConditionProviders } from './presentation/payment-condition/payment-condition.providers';
import { PaymentConditionService } from './presentation/payment-condition/payment-condition.service';
import { SubCategoryModule } from './presentation/sub-category/sub-category.module';
import { CategoryController } from './presentation/category/category.controller';
import { CategoryProviders } from './presentation/category/category.providers';
import { CategoryService } from './presentation/category/category.service';
import { SubCategoryController } from './presentation/sub-category/sub-category.controller';
import { SubCategoryProviders } from './presentation/sub-category/sub-category.providers';
import { SubCategoryService } from './presentation/sub-category/sub-category.service';
import { OrderItemsModule } from './presentation/order-itens/order-items.module';
import { OrderItemsController } from './presentation/order-itens/order-items.controller';
import { OrderItemsProviders } from './presentation/order-itens/order-items.providers';
import { OrderItemsService } from './presentation/order-itens/order-items.service';
import { ProductController } from './presentation/products/product.controller';
import { ProductProviders } from './presentation/products/product.providers';
import { ProductService } from './presentation/products/product.service';
import { VenomIntegrationModule } from "./presentation/comunication/venom-integration/venom-integration.module";
import { SequelizeModule } from '@nestjs/sequelize';
// import { VenomIntegrationController } from "./presentation/comunication/venom-integration/venom-integration.controller";
// import { VenomIntegrationService } from "./presentation/comunication/venom-integration/venom-integration.service";
import { PromotionModule } from './presentation/promotion/promotion.module';
import { PromotionController } from "./presentation/promotion/promotion.controller";
import { PromotionProviders } from "./presentation/promotion/promotion.providers";
import { PromotionService } from "./presentation/promotion/promotion.service";
import { PromotionProductsModule } from "./presentation/promotion_products/promotion_products.module";
import { PromotionProductsController } from "./presentation/promotion_products/promotion_products.controller";
import { PromotionProductProviders } from "./presentation/promotion_products/promotion_products.providers";
import { PromotionProductsService } from "./presentation/promotion_products/promotion_products.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../jwt.constants";

@Module({
  imports: [
    UserModule,
    AuthModule,
    CategoryModule,
    ConfigurationModule,
    CrmModule,
    ClientModule,
    OrdersModule,
    PriceTableModule,
    PaymentFormModule,
    PaymentConditionModule,
    CategoryModule,
    SubCategoryModule,
    OrderItemsModule,
    VenomIntegrationModule,
    PromotionModule,
    PromotionProductsModule,
    SequelizeModule,
    JwtModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    })
  ],
  controllers: [
    UserController,
    ClientController,
    PriceTableController,
    PaymentFormController,
    PaymentConditionController,
    CategoryController,
    SubCategoryController,
    OrderItemsController,
    ProductController,
    PromotionController,
    PromotionProductsController
    // VenomIntegrationController,
  ],
  providers: [
    ...databaseProviders,
    ...userProviders,
    ...ClientProviders,
    ...OrderProviders,
    ...PriceTableProviders,
    ...PaymentFormProviders,
    ...PaymentConditionProviders,
    ...CategoryProviders,
    ...SubCategoryProviders,
    ...OrderItemsProviders,
    ...ProductProviders,
    ...PromotionProviders,
    ...PromotionProductProviders,
    UserService,
    ClientService,
    PriceTableService,
    PaymentFormService,
    PaymentConditionService,
    CategoryService,
    SubCategoryService,
    OrderItemsService,
    ProductService,
    PromotionService,
    PromotionProductsService

    // VenomIntegrationService,
  ],
  exports: [...databaseProviders],
})
export class AppModule {}
