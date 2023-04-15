import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNotEmpty } from 'class-validator';
import { User } from '../entities/Users.entity';
import { Product } from 'src/products/entities/Products.entity';

export class CreateOrdersDto {
  @IsNotEmpty()
  @IsDate()
  readonly date: Date;
  @IsNotEmpty()
  readonly user: User;
  @IsNotEmpty()
  readonly products: Product[];
}

export class UpdateOrderDto extends PartialType(CreateOrdersDto) {}
