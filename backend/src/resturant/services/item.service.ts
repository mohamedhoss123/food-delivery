import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from '../dto/create-item.dto';

@Injectable()
export class ItemService {
    constructor(private readonly prisma: PrismaService) {}
    createItem(data: CreateItemDto) {
        const item = this.prisma.item.create({
          data: {
            ...data,
            image_url: "",
          },
        });
        return item;
      }
}
