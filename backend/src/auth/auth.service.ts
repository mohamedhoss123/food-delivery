import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {}

    async createUser(data: CreateUserDto) {
        const user = await this.prisma.users.create({
            data,
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
            throw new Error('User not found');
        }
        return user;
    }
}
