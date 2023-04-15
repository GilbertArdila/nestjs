import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { CustomerService } from './services/Customers.service';
import { UsersService } from './services/Users.service';
import { forwardRef } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [forwardRef(() => ProductsModule)],
  controllers: [CustomersController, UsersController],
  providers: [CustomerService, UsersService],
  exports: [CustomerService, UsersService],
})
export class UsersModule {}
