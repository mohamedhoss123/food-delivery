import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from '../dto/create-item.dto';

@Injectable()
export class ItemService {
    constructor(private readonly prisma: PrismaService) {}
    createItem(data: CreateItemDto,restaurant_id:string) {
        const item = this.prisma.item.create({
          data: {
            ...data,
            image_url: "",
            restaurant_id
          },
        });
        return item;
      }

    getItems(restaurant_id:string) {
        const items = this.prisma.item.findMany({
          where: {
            restaurant_id
          },
        });
        return items;
      }
}
