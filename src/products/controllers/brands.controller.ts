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
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { CreateBrandDto, UpdateBranDto } from 'src/products/dtos/Brands.dto';
import { BrandsService } from 'src/products/services/Brands.service';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private service: BrandsService) {}
  @ApiOperation({ summary: 'gets all brands' })
  @Get()
  getAllBrands() {
    return this.service.findAll();
  }
  @ApiOperation({ summary: 'gets one brand by its id' })
  @Get(':id')
  getBrandById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }
  //post

  @Post()
  @ApiOperation({ summary: 'creates a new brand' })
  create(@Body() payload: CreateBrandDto) {
    return this.service.create(payload);
  }
  @Put(':id')
  @ApiOperation({ summary: 'updates a brands information by its id' })
  update(
    @Body() payload: UpdateBranDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.service.update(id, payload);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'deletes a  brand by its id' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.delete(id);
  }
}
