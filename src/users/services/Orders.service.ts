import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrdersDto, UpdateOrderDto } from 'src/users/dtos/Orders.dto';
import { Order } from 'src/users/entities/Orders.entity';

@Injectable()
export class OrdersService {
  private counterId = 1;
  private orders: Order[] = [
    {
      id: (this.counterId = this.counterId + 1),
      customerId: 5,
      ProductId: 3,
      totalAmount: 15,
    },
    {
      id: (this.counterId = this.counterId + 1),
      customerId: 6,
      ProductId: 5,
      totalAmount: 35,
    },
  ];
  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const category = this.orders.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`the category ${id} does not exist`);
    }
    return category;
  }
  findProductByCategory(categoryId: number, id: number) {
    return { categoryId, id };
  }

  create(payload: CreateOrdersDto) {
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.orders.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateOrderDto) {
    const categoryFound = this.findOne(id);
    if (!categoryFound) {
      throw new NotFoundException(`the category ${id} does not exist`);
    }
    const index = this.orders.findIndex((item) => item.id === id);
    this.orders[index] = {
      ...categoryFound,
      ...payload,
    };
    return this.orders[index];
  }
  delete(id: number) {
    const categoryFound = this.findOne(id);
    if (!categoryFound) {
      throw new NotFoundException(`category ${id} does not exist`);
    }
    const index = this.orders.indexOf(categoryFound);
    this.orders.splice(index, 1);
    return true;
  }
}
