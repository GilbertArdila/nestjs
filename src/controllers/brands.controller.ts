import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAllBrands() {
    return {
      message: 'brands',
    };
  }

  @Get(':id')
  getBrandById(@Param('id') id: string) {
    return {
      message: `brand id is ${id} `,
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
