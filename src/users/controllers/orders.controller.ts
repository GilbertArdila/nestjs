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
import { CreateOrdersDto, UpdateOrderDto } from 'src/users/dtos/Orders.dto';
import { OrdersService } from 'src/users/services/Orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private service: OrdersService) {}
  @Get()
  getAllOrders() {
    return this.service.findAll();
  }

  @Get(':id')
  getOrderById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
  //post
  @Post()
  create(@Body() payload: CreateOrdersDto) {
    return this.service.create(payload);
  }
  @Put(':id')
  update(
    @Body() payload: UpdateOrderDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.update(payload, id);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
