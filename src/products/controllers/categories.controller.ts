import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CategoriesService } from 'src/products/services/Categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/Categories.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private service: CategoriesService) {}

  @Get()
  getAllCategories() {
    this.service.findAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  //getting more than one param
  @Get(':categoryId/products/:id')
  getCategoryAndProduct(
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.service.findProductByCategory(categoryId, id);
  }

  //post
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateCategoryDto) {
    return this.service.create(payload);
  }

  @Put(':id')
  update(
    @Body() payload: UpdateCategoryDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
