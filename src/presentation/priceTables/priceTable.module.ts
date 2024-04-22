import { Module } from '@nestjs/common';
import { PriceTableService } from './priceTable.service';
import { PriceTableProviders } from './priceTable.providers';
import { PriceTableController } from './priceTable.controller';

@Module({
  providers: [PriceTableService, ...PriceTableProviders],
  controllers: [PriceTableController],
})
export class PriceTableModule {}
