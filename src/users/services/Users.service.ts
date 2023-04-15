import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/Users.dto';
import { User } from 'src/users/entities/Users.entity';
@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: (this.counterId = this.counterId + 1),
      userName: 'user 1',
      email: 'email@gmail.com',
    },
    {
      id: (this.counterId = this.counterId + 1),
      userName: 'user 2',
      email: 'email@gmail.com',
    },
    {
      id: (this.counterId = this.counterId + 1),
      userName: 'user 3',
      email: 'email@gmail.com',
    },
  ];
  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const product = this.users.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`user's id ${id} does not exist`);
    }
    return product;
  }

  create(payload: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: UpdateUserDto) {
    const userFound = this.findOne(id);
    if (!userFound) {
      throw new NotFoundException(`user's id ${id} does not exist`);
    }

    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...userFound,
      ...payload,
    };
    return this.users[index];
  }

  delete(id: number) {
    const userFound = this.findOne(id);
    if (!userFound) {
      throw new NotFoundException(`user's id ${id} does not exist`);
    }
    const index = this.users.indexOf(userFound);
    this.users.splice(index, 1);
    return true;
  }
}
