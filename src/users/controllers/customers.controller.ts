import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  CreateCusomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/Customers.dto';
import { CustomerService } from 'src/users/services/Customers.service';
@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private service: CustomerService) {}
  @Get()
  getAllCustomers() {
    return this.service.findAll();
  }

  @Get(':id')
  getCustomerById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
  //post
  @Post()
  create(@Body() payload: CreateCusomerDto) {
    return this.service.create(payload);
  }
  @Put(':id')
  update(
    @Body() payload: UpdateCustomerDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
