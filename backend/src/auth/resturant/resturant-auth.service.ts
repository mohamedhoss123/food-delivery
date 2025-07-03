import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateResturantDto } from '../dto/create-resturant.dto';
import { LoginResturantDto } from '../dto/login-resturant.dto';
import * as argon2 from 'argon2';
@Injectable()
export class ResturantService {
    constructor(private readonly prisma: PrismaService) {}
    async createResturant(data: CreateResturantDto) {
        const hashedPassword = await argon2.hash(data.password);
        const resturant = await this.prisma.restaurant.create({
            data: {
                ...data,
                password: hashedPassword,
            },
        });
        return resturant;
    }

    async login(data: LoginResturantDto) {
        const resturant = await this.prisma.restaurant.findUnique({
            where: {
                email: data.email,
            },
        });
        if (!resturant) {
            throw new UnauthorizedException('Resturant not found');
        }
        const isPasswordValid = await argon2.verify(resturant.password!, data.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }
        return resturant;
    }
}
