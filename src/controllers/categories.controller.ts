import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  //getting more than one param
  @Get(':categoryId/products/:id')
  getCategory(
    @Param('categoryId') categoryId: string,
    @Param('id') id: string,
  ) {
    return `category id is ${categoryId} and product id is ${id}`;
  }
}
