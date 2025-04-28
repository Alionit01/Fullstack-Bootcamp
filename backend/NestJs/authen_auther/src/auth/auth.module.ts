import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service'; 

@Module({
  imports: [PassportModule], 
  controllers: [AuthController], 
  providers: [AuthService, LocalStrategy, UsersService], 
})
export class AuthModule {}
