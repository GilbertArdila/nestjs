import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateCusomerDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly phone: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description:
      'This must be the customer physical address, not email address',
  })
  readonly address: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Please put the actual customer city',
  })
  readonly city: string;
}
export class UpdateCustomerDto extends PartialType(CreateCusomerDto) {}
