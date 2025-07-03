import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateItemDto {
  @ApiProperty({
    example: 'Burger',
    description: 'The name of the item',
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    example: 10.99,
    description: 'The price of the item',
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  readonly price: number;
}
