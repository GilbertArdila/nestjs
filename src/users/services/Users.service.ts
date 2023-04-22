import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/Users.dto';
import { User } from 'src/users/entities/Users.entity';
import { Order } from '../entities/Orders.entity';
import { ProductsService } from 'src/products/services/products.service';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UsersService {
  //injectamos el service de products porque lo usamos en el servicio que llama las ordenes del usuario
  constructor(
    private ProductsService: ProductsService,
    //injectamos las variables desde app.module ConfigModule.forRoot({
    // envFilePath: '.env',
    //isGlobal: true,
    // }),
    private configService: ConfigService,
  ) {}
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
    //usamos la variable de entorno
    const db = this.configService.get('DATABASE_NAME');
    const apikey = this.configService.get('APY_KEY');
    console.log(apikey + db);
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

  getOrderByUser(id: number): Order {
    const user = this.findOne(id);
    if (!user) {
      throw new NotFoundException(`user's id ${id} does not exist`);
    }
    return {
      date: new Date(),
      user,
      products: this.ProductsService.findAll(),
    };
  }
}
