import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PriceTableService } from './priceTable.service';
import { PriceTable } from './priceTable.entity';

@Controller('price-table')
export class PriceTableController {
  constructor(private readonly priceTableService: PriceTableService) {}

  @Post('create')
  async createPriceTable(
    @Body() priceTableData: PriceTable,
  ): Promise<PriceTable | string> {
    try {
      const resp =
        await this.priceTableService.createPriceTable(priceTableData);
      if (resp) {
        return resp;
      }
    } catch (e) {
      return e;
    }
  }

  @Get('find')
  async getPriceTables(): Promise<PriceTable[] | string> {
    try {
      return await this.priceTableService.getPriceTables();
    } catch (e) {
      return e;
    }
  }

  @Get('find-one')
  async getPriceTable(@Query() param: any): Promise<PriceTable | string> {
    try {
      return await this.priceTableService.getPriceTableBy(param.id);
    } catch (e) {
      return e;
    }
  }
}
