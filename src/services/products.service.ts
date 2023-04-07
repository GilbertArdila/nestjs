import { Injectable } from '@nestjs/common';
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
    return this.products.find((product) => product.id === id);
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
    const productFound = this.products.findIndex((item) => item.id === id);
    let message = '';
    if (productFound > 0) {
      this.products[productFound] = {
        id: id,
        ...payload,
      };
      message = 'Product updated';
    } else {
      message = 'Product not found';
    }
    return message;
  }

  delete(id: number) {
    const productFound = this.products.findIndex((item) => item.id === id);
    let message = '';
    if (productFound > 0) {
      this.products.splice(productFound, 1);
      message = 'product deleted';
    } else {
      message = 'product not found';
    }
    return message;
  }
}
