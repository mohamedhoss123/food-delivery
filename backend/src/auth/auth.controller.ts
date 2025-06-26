import { Controller, Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() data: CreateUserDto) {
        return this.authService.createUser(data);
    }

    @Post('login')
    async login(@Body() data: LoginDto) {
        return this.authService.login(data);
    }

}
