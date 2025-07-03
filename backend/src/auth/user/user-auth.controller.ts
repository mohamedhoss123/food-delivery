import { Controller, Post,Body, UseFilters, Get,Req, Session, UseGuards, Response } from '@nestjs/common';
import { AuthService } from './user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginDto } from '../dto/login.dto';
import { PrismaErrorFilter } from '../filters/prisma-filters';
import { UserAuthGuard } from '../guards/user-auth.gaurd';
@Controller('auth')
@UseFilters(new PrismaErrorFilter())
export class UserAuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() data: CreateUserDto) {
        await this.authService.createUser(data);
        return 201;
    }

    @Post('login')
    async login(@Session() session: Record<string, any>,@Body() data: LoginDto) {
        const user = await this.authService.login(data);
        session.client.userId = user.id;
        return 200 
    }
    @Get('me')
    @UseGuards(UserAuthGuard)
    async me(@Session() session: Record<string, any>) {
        return session.client.userId;
    }

    @Get("logout")
    @UseGuards(UserAuthGuard)
    async logout(@Session() session: Record<string, any>) {
        session.destroy();
        return 200;
    }

}
