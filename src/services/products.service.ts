import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/Products.entity';
@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: (this.counterId = this.counterId + 1),
      name: 'producto 1',
      description: 'descripcion',
      price: 25,
      stock: 12,
      image: 'imagen.jpg',
    },
    {
      id: (this.counterId = this.counterId + 1),
      name: 'producto 2',
      description: 'descripcion',
      price: 25,
      stock: 12,
      image: 'imagen.jpg',
    },
    {
      id: (this.counterId = this.counterId + 1),
      name: 'producto 3',
      description: 'descripcion',
      price: 25,
      stock: 12,
      image: 'imagen.jpg',
    },
    {
      id: (this.counterId = this.counterId + 1),
      name: 'producto 4',
      description: 'descripcion',
      price: 25,
      stock: 12,
      image: 'imagen.jpg',
    },
    {
      id: (this.counterId = this.counterId + 1),
      name: 'producto 5',
      description: 'descripcion',
      price: 25,
      stock: 12,
      image: 'imagen.jpg',
    },
    {
      id: (this.counterId = this.counterId + 1),
      name: 'producto 6',
      description: 'descripcion',
      price: 25,
      stock: 12,
      image: 'imagen.jpg',
    },
  ];
  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`product's id ${id} does not exist`);
    }
    return product;
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: any) {
    const productFound = this.findOne(id);
    if (!productFound) {
      throw new NotFoundException(`product's id ${id} does not exist`);
    }

    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...productFound,
      ...payload,
    };
    return this.products[index];
  }

  delete(id: number) {
    const productFound = this.findOne(id);
    if (!productFound) {
      throw new NotFoundException(`product's id ${id} does not exist`);
    }
    const index = this.products.indexOf(productFound);
    this.products.splice(index, 1);
    return true;
  }
}
