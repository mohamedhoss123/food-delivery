import { Controller, Post,Body, UseFilters } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaErrorFilter } from './filters/email-used-filters';
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
    async login(@Body() data: LoginDto) {
        return this.authService.login(data);
    }

}
