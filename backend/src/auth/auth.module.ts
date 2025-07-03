import { Module } from '@nestjs/common';
import { UserAuthController } from './controllers/user-auth.controller';
import { AuthService } from './services/user.service';
import { ResturantService } from 'src/auth/services/resturant-auth.service';
import { ResturantAuthController } from './controllers/resturant-auth.controller';

@Module({
  controllers: [UserAuthController,ResturantAuthController],
  providers: [AuthService,ResturantService]
})
export class AuthModule {}
