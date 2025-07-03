import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from '../dto/create-item.dto';
@Injectable()
export class ResturantService {
    constructor(private readonly prisma: PrismaService) {}

   
}
