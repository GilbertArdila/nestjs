import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAllBrands() {
    return 'brands';
  }

  @Get(':id')
  getBrandById(@Param(':id') id: string) {
    return `brand id is ${id} `;
  }
}
