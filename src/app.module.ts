import { Module } from '@nestjs/common';
import { databaseProviders } from '../database.providers';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReportModule } from './report/report.module';
import { CrmModule } from './crm/crm.module';
import { ClientModule } from './presentation/client/client.module';
import { ClientController } from './presentation/client/client.controller';
import { ClientProviders } from './presentation/client/client.providers';
import { ClientService } from "./presentation/client/client.service";

@Module({
  imports: [
    UserModule,
    AuthModule,
    ProductModule,
    CategoryModule,
    OrderModule,
    ConfigurationModule,
    DashboardModule,
    ReportModule,
    CrmModule,
    ClientModule,
  ],
  controllers: [UserController, ClientController],
  providers: [
    ...databaseProviders,
    ...userProviders,
    ...ClientProviders,
    UserService,
    ClientService,
  ],
  exports: [...databaseProviders],
})
export class AppModule {}
