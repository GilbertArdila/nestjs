import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return 'users';
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return `user id is ${id} `;
  }

  //query params
  @Get()
  getUsers(@Query('limit') limit: number, @Query('offset') offset: number) {
    return `limit ${limit} and offset ${offset} `;
  }
}
