import { Module } from '@nestjs/common';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/Categories.service';
import { BrandsService } from './services/Brands.service';
import { forwardRef } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
@Module({
  imports: [forwardRef(() => UsersModule)],
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductsService, CategoriesService, BrandsService],
  exports: [ProductsService, CategoriesService, BrandsService],
})
export class ProductsModule {}
