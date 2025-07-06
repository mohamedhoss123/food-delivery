import { Controller ,UseGuards,Session, Get,Delete,Param} from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { CreateItemDto } from '../dto/create-item.dto';
import { ItemService } from '../services/item.service';
import { ResturantAuthGuard } from 'src/auth/guards/resturant-auth-gaurd';
@Controller('resturant/item')
@UseGuards(ResturantAuthGuard)
export class ItemController {
    constructor(private readonly itemService: ItemService) {}
    @Post('')
    async createItem(@Body() data: CreateItemDto,@Session() session: Record<string, any> ) {
        return this.itemService.createItem(data,session.resturant.id);
    }
    @Get('')
    async getItems(@Session() session: Record<string, any> ) {
        return this.itemService.getItems(session.resturant.id);
    }

    @Get(':id')
    async getItem(@Param('id') id: string ) {
        return this.itemService.getItem(id);
    }

    @Delete(':id')
    async deleteItem(@Param('id') id: string ) {
        return this.itemService.deleteItem(id);
    }
}
