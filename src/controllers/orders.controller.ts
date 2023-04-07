import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAllOrders() {
    return 'ordes';
  }

  @Get(':id')
  getOrderById(@Param('id') id: string) {
    return `ordes id is ${id} `;
  }
}
