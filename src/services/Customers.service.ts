import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCusomerDto, UpdateCustomerDto } from 'src/dtos/Customers.dto';
import { Customer } from 'src/entities/Customers.entity';

@Injectable()
export class CustomerService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: (this.counterId = this.counterId + 1),
      name: 'customer 1',
      email: 'myemail@gmail.com',
      address: 'an address',
      phone: '312456987',
      city: 'Bogota',
    },
    {
      id: (this.counterId = this.counterId + 1),
      name: 'customer 2',
      email: 'myemail@gmail.com',
      address: 'an address',
      phone: '312456987',
      city: 'Bogota',
    },
    {
      id: (this.counterId = this.counterId + 1),
      name: 'customer 3',
      email: 'myemail@gmail.com',
      address: 'an address',
      phone: '312456987',
      city: 'Bogota',
    },
  ];
  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const brand = this.customers.find((item) => item.id === id);
    if (!brand) {
      throw new NotFoundException(`the customer ${id} does not exist`);
    }
    return brand;
  }

  create(payload: CreateCusomerDto) {
    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const brandFound = this.findOne(id);
    if (!brandFound) {
      throw new NotFoundException(`the brand ${id} does not exist`);
    }
    const index = this.customers.findIndex((item) => item.id === id);
    this.customers[index] = {
      ...brandFound,
      ...payload,
    };
    return this.customers[index];
  }
  delete(id: number) {
    const brandFound = this.findOne(id);
    if (!brandFound) {
      throw new NotFoundException(`brand ${id} does not exist`);
    }
    const index = this.customers.indexOf(brandFound);
    this.customers.splice(index, 1);
    return true;
  }
}
