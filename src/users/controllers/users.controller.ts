import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/Users.dto';
import { UsersService } from 'src/users/services/Users.service';
@ApiTags('users')
@Controller('users')
export class UsersController {
  //llamamos el servicio del user
  constructor(private service: UsersService) {}

  @Get('/all')
  getAllUsers() {
    return this.service.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Get(':id/orders')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return this.service.getOrderByUser(id);
  }

  //query params
  @Get('')
  getUsers(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.service.findAll();
  }
  //post
  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.service.create(payload);
  }
  @Put(':id')
  update(
    @Body() payload: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
