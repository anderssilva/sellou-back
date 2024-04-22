import { Inject, Injectable, Query } from '@nestjs/common';
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
        productDescription: productData.productDescription,
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
