import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateResturantDto } from '../auth/dto/create-resturant.dto';
import { LoginResturantDto } from '../auth/dto/login-resturant.dto';
@Injectable()
export class ResturantService {
    constructor(private readonly prisma: PrismaService) {}
    async createResturant(data: CreateResturantDto) {
    }

    async login(data: LoginResturantDto) {
    }
}
