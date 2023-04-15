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
import { CreateCusomerDto, UpdateCustomerDto } from 'src/dtos/Customers.dto';
import { CustomerService } from 'src/services/Customers.service';

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
