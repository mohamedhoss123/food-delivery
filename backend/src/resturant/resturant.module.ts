import { Module } from '@nestjs/common';
import { ResturantController } from './resturant.controller';

@Module({
  controllers: [ResturantController],
  providers: []
})
export class ResturantModule {}
