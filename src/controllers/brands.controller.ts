import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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
