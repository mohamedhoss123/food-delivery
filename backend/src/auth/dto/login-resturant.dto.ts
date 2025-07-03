import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginResturantDto {
    @ApiProperty({
        description: 'Restaurant email',
        example: 'restaurant@example.com'
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'Restaurant password',
        example: 'securepassword123'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}