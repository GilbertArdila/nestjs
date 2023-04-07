import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAllProducts() {
    return `products`;
  }

  //getting params
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `product ${id}`;
  }

  //query params
  @Get()
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand = 'no has enviado la marca',
  ) {
    return `limit ${limit} and offset ${offset} and brand ${brand}`;
  }
}
