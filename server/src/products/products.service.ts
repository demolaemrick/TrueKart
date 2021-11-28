import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { Product } from './interfaces/products.interface';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private productModel: Model<Product>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
