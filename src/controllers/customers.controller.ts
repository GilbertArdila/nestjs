import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAllCustomers() {
    return 'customers';
  }

  @Get(':id')
  getCustomerById(@Param(':id') id: string) {
    return `customer id is ${id} `;
  }
}
