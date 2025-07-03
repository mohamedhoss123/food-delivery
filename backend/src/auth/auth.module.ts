import { Module } from '@nestjs/common';
import { UserAuthController } from './user/user-auth.controller';
import { AuthService } from './user/user.service';

@Module({
  controllers: [UserAuthController],
  providers: [AuthService]
})
export class AuthModule {}
