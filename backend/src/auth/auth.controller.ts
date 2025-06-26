import { Controller, Post,Body, UseFilters, Get,Req, Session, UseGuards, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaErrorFilter } from './filters/prisma-filters';
import { AuthGuard } from './guards/auth.gaurd';
@Controller('auth')
@UseFilters(new PrismaErrorFilter())
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() data: CreateUserDto) {
        await this.authService.createUser(data);
        return 201;
    }

    @Post('login')
    async login(@Session() session: Record<string, any>,@Body() data: LoginDto) {
        const user = await this.authService.login(data);
        session.userId = user.id;
        return 200 
    }
    @Get('me')
    @UseGuards(AuthGuard)
    async me(@Session() session: Record<string, any>) {
        return session.userId;
    }

    @Get("logout")
    @UseGuards(AuthGuard)
    async logout(@Session() session: Record<string, any>) {
        session.destroy();
        return 200;
    }

}
