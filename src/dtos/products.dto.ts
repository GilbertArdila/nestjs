import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(1)
  readonly stock: number;
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
}

//utilizamos las mismas validaciones pero cada argumento va a ser opcional
export class UpdateProductDto extends PartialType(CreateProductDto) {}
