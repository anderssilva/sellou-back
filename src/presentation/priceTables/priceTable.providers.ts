import { PriceTable } from './priceTable.entity';

export const PriceTableProviders = [
  {
    provide: 'PRICE_TABLE_REPOSITORY',
    useValue: PriceTable,
  },
];
