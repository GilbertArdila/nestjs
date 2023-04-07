import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAllOrders() {
    return {
      message: 'ordes',
    };
  }

  @Get(':id')
  getOrderById(@Param('id') id: string) {
    return {
      message: `ordes id is ${id} `,
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
