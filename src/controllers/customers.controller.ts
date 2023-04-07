import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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
