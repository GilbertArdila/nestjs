import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBrandDto, UpdateBranDto } from 'src/products/dtos/Brands.dto';
import { BrandsService } from 'src/products/services/Brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private service: BrandsService) {}
  @Get()
  getAllBrands() {
    return this.service.findAll();
  }

  @Get(':id')
  getBrandById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
  //post
  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.service.create(payload);
  }
  @Put(':id')
  update(
    @Body() payload: UpdateBranDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.delete(id);
  }
}
