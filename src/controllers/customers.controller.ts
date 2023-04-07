import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAllCustomers() {
    return {
      message: 'customers',
    };
  }

  @Get(':id')
  getCustomerById(@Param('id') id: string) {
    return {
      message: `customer id is ${id} `,
    };
  }
  //post
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Acción de crear',
      status: 'ok',
      payload,
    };
  }
}
