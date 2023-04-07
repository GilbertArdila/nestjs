import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/all')
  getAllUsers() {
    return {
      message: 'users',
    };
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return {
      message: `user id is ${id} `,
    };
  }

  //query params
  @Get('')
  getUsers(@Query('limit') limit: number, @Query('offset') offset: number) {
    return {
      message: `limit ${limit} and offset ${offset} `,
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
  @Put(':id')
  update(@Body() payload: any, @Param('id') id: string) {
    return {
      message: 'Acción de actualizar',
      status: 'ok',
      id,
      payload,
    };
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: 'Acción de borrar',
      id,
    };
  }
}
