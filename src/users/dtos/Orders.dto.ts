import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateOrdersDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly customerId: number;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly ProductId: number;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly totalAmount: number;
}

export class UpdateOrderDto extends PartialType(CreateOrdersDto) {}
