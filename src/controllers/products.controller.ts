import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //query params
  @Get()
  getLimit(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand = 'no has enviado la marca',
  ) {
    return {
      message: `limit ${limit} and offset ${offset} and brand ${brand}`,
    };
  }
  @Get('/all')
  getAll() {
    return {
      message: `products`,
    };
  }

  //getting params
  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      Message: `product ${id}`,
    };
  }

  //post
  @Post()
  //no es necesario, él ya lo hace por debajo
  @HttpCode(HttpStatus.CREATED)
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
  //no es necesario, él ya lo hace por debajo
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return {
      message: 'Acción de borrar',
      id,
    };
  }
}
