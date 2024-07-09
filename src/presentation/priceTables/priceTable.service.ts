import { Inject, Injectable } from '@nestjs/common';
import { PriceTable } from './priceTable.entity';

@Injectable()
export class PriceTableService {
  constructor(
    @Inject('PRICE_TABLE_REPOSITORY')
    private priceTableRepository: typeof PriceTable,
  ) {}

  async createPriceTable(priceTableData: PriceTable): Promise<PriceTable> {
    try {
      return await this.priceTableRepository.create({
        codPriceTable: priceTableData.codPriceTable,
        priceTableDescription: priceTableData.priceTableDescription,
      });
    } catch (e) {
      return e;
    }
  }

  async getPriceTables(): Promise<PriceTable[]> {
    return await this.priceTableRepository.findAll();
  }

  async getPriceTableBy(id: number): Promise<PriceTable> {
    return await this.priceTableRepository.findOne({ where: { id: id } });
  }
}
