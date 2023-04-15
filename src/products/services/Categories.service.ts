import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from 'src/products/dtos/Categories.dto';
import { Category } from 'src/products/entities/Categories.entity';
@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: (this.counterId = this.counterId + 1),
      name: 'category 1',
      description: 'descripcion',
      image: 'imagen.jpg',
    },
    {
      id: (this.counterId = this.counterId + 1),
      name: 'category 2',
      description: 'descripcion',
      image: 'imagen.jpg',
    },
    {
      id: (this.counterId = this.counterId + 1),
      name: 'category 3',
      description: 'descripcion',
      image: 'imagen.jpg',
    },
  ];
  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`the category ${id} does not exist`);
    }
    return category;
  }
  findProductByCategory(categoryId: number, id: number) {
    return { categoryId, id };
  }

  create(payload: CreateCategoryDto) {
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoryDto) {
    const categoryFound = this.findOne(id);
    if (!categoryFound) {
      throw new NotFoundException(`the category ${id} does not exist`);
    }
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...categoryFound,
      ...payload,
    };
    return this.categories[index];
  }
  delete(id: number) {
    const categoryFound = this.findOne(id);
    if (!categoryFound) {
      throw new NotFoundException(`category ${id} does not exist`);
    }
    const index = this.categories.indexOf(categoryFound);
    this.categories.splice(index, 1);
    return true;
  }
}
