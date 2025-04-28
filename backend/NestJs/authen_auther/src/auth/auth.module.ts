import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service'; 
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PassportModule, UsersModule,
    JwtModule.register({
      secret : "key",
      signOptions: {
        expiresIn: '60s'
      }
    })
  ], 
  controllers: [AuthController], 
  providers: [AuthService, LocalStrategy, UsersService], 
  exports: [AuthService]
})
export class AuthModule {}
