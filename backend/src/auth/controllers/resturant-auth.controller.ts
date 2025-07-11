import { Controller, Post,Body, UseFilters, Get,Req, Session, UseGuards, Response } from "@nestjs/common";
import { ResturantService } from "src/auth/services/resturant-auth.service";
import { CreateResturantDto } from "../dto/create-resturant.dto";
import { LoginResturantDto } from "../dto/login-resturant.dto";
import { ResturantAuthGuard } from "../guards/resturant-auth-gaurd";
import { PrismaErrorFilter } from "../filters/prisma-filters";
@Controller('auth/resturant')
@UseFilters(new PrismaErrorFilter())
export class ResturantAuthController {
  constructor(private readonly resturantService: ResturantService) {}

      @Post('register')
      async register(@Body() data: CreateResturantDto) {
          await this.resturantService.createResturant(data);
          return 201;
      } 
  
      @Post('login')
      async login(@Session() session: Record<string, any>,@Body() data: LoginResturantDto) {
          const resturant = await this.resturantService.login(data);
          console.log(resturant)
          session.resturant= {id:resturant.id};
          return 200 
      }
      @Get('me')
      @UseGuards(ResturantAuthGuard)
      async me(@Session() session: Record<string, any>) {
          return session.resturant.id;
      }
  
      @Get("logout")
      @UseGuards(   ResturantAuthGuard)
      async logout(@Session() session: Record<string, any>) {
          session.destroy();
          return 200;
      }
}
