import { Sequelize } from 'sequelize-typescript';
import { User } from './src/user/entities/user.entity';
import { Client } from './src/presentation/client/client.entity';
import { Order } from './src/presentation/orders/order.entity';
import { PriceTable } from './src/presentation/priceTables/priceTable.entity';
import { PaymentForm } from './src/presentation/paymentForm/paymentForm.entity';
import { PaymentCondition } from './src/presentation/payment-condition/payment-condition.entity';
import { SubCategory } from './src/presentation/sub-category/sub-category.entity';
import { Category } from './src/presentation/category/category.entity';
import { OrderItems } from './src/presentation/order-itens/order-items.entity';
import { Product } from './src/presentation/products/product.entity';
import { Promotion } from "./src/presentation/promotion/promotion.entity";
import { PromotionProducts } from "./src/presentation/promotion_products/promotion_products.entity";
import {  Role } from "./src/user/entities/roles.entity"

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'sellou-database-local',
      });
      sequelize.addModels([
        User,
        Client,
        Order,
        PriceTable,
        PaymentForm,
        PaymentCondition,
        SubCategory,
        Category,
        OrderItems,
        Product,
        Promotion,
        PromotionProducts,
        Role
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
