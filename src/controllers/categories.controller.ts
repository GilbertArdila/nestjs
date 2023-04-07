import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getAllCategories() {
    return 'categories';
  }
  @Get(':id')
  getCategoryById(@Param('id') id: string) {
    return `category id is ${id} `;
  }
  @Get(':id/products/:userId')
  getCategoryAndUserById(
    @Param('id') id: string,
    @Param('userId') userId: string,
  ) {
    return `category id is ${id} and user id is ${userId} `;
  }
  //getting more than one param
  @Get(':categoryId/products/:id')
  getCategoryAndProduct(
    @Param('categoryId') categoryId: string,
    @Param('id') id: string,
  ) {
    return `category id is ${categoryId} and product id is ${id}`;
  }
}
