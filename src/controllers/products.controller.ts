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
import { ProductsService } from '../services/products.service';
@Controller('products')
export class ProductsController {
  //injectamos el servicio
  constructor(private productsService: ProductsService) {}

  //query params
  @Get()
  getLimit(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand = 'no has enviado la marca',
  ) {
    return this.productsService.findAll();
  }
  @Get('/all')
  getAll() {
    return this.productsService.findAll();
  }

  //getting params
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  //post
  @Post()
  //no es necesario, él ya lo hace por debajo
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }
  @Put(':id')
  update(@Body() payload: any, @Param('id') id: string) {
    return this.productsService.update(+id, payload);
  }
  @Delete(':id')
  //no es necesario, él ya lo hace por debajo
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string) {
    return this.productsService.delete(+id);
  }
}
