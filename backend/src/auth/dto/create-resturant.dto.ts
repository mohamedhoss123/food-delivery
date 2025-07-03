import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResturantDto {
    @ApiProperty({
        description: 'Restaurant name',
        example: 'Delicious Diner',
        minLength: 3
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    readonly name: string;

    @ApiProperty({
        description: 'Restaurant description',
        example: 'Serving delicious food since 2020'
    })
    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @ApiProperty({
        description: 'Restaurant owner password',
        example: 'securepassword123',
        minLength: 6
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @ApiProperty({
        description: 'Restaurant owner email',
        example: 'owner@example.com'
    })
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
}