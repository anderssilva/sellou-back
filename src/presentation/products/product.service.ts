import { Inject, Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: typeof Product,
  ) {}

  async createProduct(productData: Product): Promise<Product | string> {
    try {
      return await this.productRepository.create({
        productCode: productData.productCode,
        productDescription: productData.productDescription,
        subProductCode: productData.subProductCode,
        productStatus: productData.productStatus,
        productType: productData.productType,
        productLine: productData.productLine,
        productBrand: productData.productBrand,
        productDefaultSupplier: productData.productDefaultSupplier,
        sellFractionUnity: productData.sellFractionUnity,
        packedShipment: productData.packedShipment,
        invoiceStockUnit: productData.invoiceStockUnit,
        unit: productData.unit,
        conversionFactor: productData.conversionFactor,
        netWeight: productData.netWeight,
        grossWeight: productData.grossWeight,
        productMultiple: productData.productMultiple,
        productDerivation: productData.productDerivation,
        productPrice: productData.productPrice,
      });
    } catch (e) {
      return e;
    }
  }

  async getProducts(): Promise<Product[] | string> {
    try {
      return await this.productRepository.findAll();
    } catch (e) {
      return e;
    }
  }

  async getProductById(id: number): Promise<Product | string> {
    try {
      return await this.productRepository.findOne({ where: { id: id } });
    } catch (e) {
      return e;
    }
  }
}
