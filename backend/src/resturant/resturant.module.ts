import { Module } from '@nestjs/common';
import { ResturantController } from './controllers/resturant.controller';

import { ResturantService } from './services/resturant.service';
import { ItemController } from './controllers/item.controller';
import { ItemService } from './services/item.service';
@Module({
  controllers: [ResturantController, ItemController],
  providers: [ResturantService, ItemService],
})
export class ResturantModule {

}
