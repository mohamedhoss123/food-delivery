import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    async createUser(data: CreateUserDto) {
        const hashedPassword = await argon2.hash(data.password);
        const user = await this.prisma.users.create({
            data: {
                ...data,
                password: hashedPassword,
            },
        });
        return user;
    }

    async login(data: LoginDto) {
        const user = await this.prisma.users.findUnique({
            where: {
                email: data.email,
            },
        });
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        const isPasswordValid = await argon2.verify(user.password!, data.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }
        return user;
    }
}
