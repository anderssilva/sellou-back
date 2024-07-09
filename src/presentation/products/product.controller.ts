import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async createProduct(@Body() productData: Product): Promise<Product | string> {
    console.log(productData);
    try {
      return await this.productService.createProduct(productData);
    } catch (e) {
      console.log('aqui', e);
      return e;
    }
  }

  @Get('find')
  async getProducts(): Promise<Product[] | string> {
    return await this.productService.getProducts();
  }

  @Get('find-one')
  async getClient(@Query() param: any): Promise<Product | string> {
    return await this.productService.getProductById(param.id);
  }
}
