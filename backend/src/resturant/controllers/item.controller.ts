import { Controller ,UseGuards} from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { CreateItemDto } from '../dto/create-item.dto';
import { ItemService } from '../services/item.service';
import { ResturantAuthGuard } from 'src/auth/guards/resturant-auth-gaurd';
@Controller('resturant/item')
@UseGuards(ResturantAuthGuard)
export class ItemController {
    constructor(private readonly itemService: ItemService) {}
    @Post('')
    async createItem(@Body() data: CreateItemDto) {
        return this.itemService.createItem(data);
    }
}
