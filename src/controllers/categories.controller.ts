import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getAllCategories() {
    return {
      message: 'categories',
    };
  }
  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    return {
      message: `category id is ${id} `,
    };
  }

  //getting more than one param
  @Get(':categoryId/products/:id')
  getCategoryAndProduct(
    @Param('categoryId') categoryId: string,
    @Param('id') id: string,
  ) {
    return {
      message: `category id is ${categoryId} and product id is ${id}`,
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
