import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';

@Module({
 imports: [
   UserModule,
   PassportModule,
   JwtModule.register({
     secret: 'your_secret_key',
     signOptions: { expiresIn: '1h' },
   }),
 ],
 controllers: [AuthController],
 providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}