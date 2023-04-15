import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { OrdersController } from './controllers/orders.controller';
import { CustomerService } from './services/Customers.service';
import { UsersService } from './services/Users.service';
import { OrdersService } from './services/Orders.service';
@Module({
  controllers: [CustomersController, UsersController, OrdersController],
  providers: [CustomerService, UsersService, OrdersService],
})
export class UsersModule {}
