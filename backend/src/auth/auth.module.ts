import { Module } from '@nestjs/common';
import { UserAuthController } from './user/user-auth.controller';
import { AuthService } from './user/user.service';
import { ResturantService } from 'src/auth/resturant/resturant-auth.service';
import { ResturantAuthController } from './resturant/resturant-auth.controller';

@Module({
  controllers: [UserAuthController,ResturantAuthController],
  providers: [AuthService,ResturantService]
})
export class AuthModule {}
