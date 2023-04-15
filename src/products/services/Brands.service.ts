import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBranDto } from 'src/products/dtos/Brands.dto';
import { Brand } from 'src/products/entities/Brands.entity';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: (this.counterId = this.counterId + 1),
      name: 'brand 1',
      description: 'descripcion',
    },
    {
      id: (this.counterId = this.counterId + 1),
      name: 'brand 2',
      description: 'descripcion',
    },
  ];
  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) {
      throw new NotFoundException(`the brand ${id} does not exist`);
    }
    return brand;
  }

  create(payload: CreateBrandDto) {
    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBranDto) {
    const brandFound = this.findOne(id);
    if (!brandFound) {
      throw new NotFoundException(`the brand ${id} does not exist`);
    }
    const index = this.brands.findIndex((item) => item.id === id);
    this.brands[index] = {
      ...brandFound,
      ...payload,
    };
    return this.brands[index];
  }
  delete(id: number) {
    const brandFound = this.findOne(id);
    if (!brandFound) {
      throw new NotFoundException(`brand ${id} does not exist`);
    }
    const index = this.brands.indexOf(brandFound);
    this.brands.splice(index, 1);
    return true;
  }
}
