import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
 constructor(
   private usersService: UsersService,
   private jwtService: JwtService,
 ) {}

 async validateUser(email: string, pass: string): Promise<any> {
   const user = await this.usersService.findByEmail(email);
   if (user && await bcrypt.compare(pass, user.password)) {
     const { password, ...result } = user;
     return result;
   }
   return null;
 }

 async login(user: any) {
   const payload = { username: user.email, sub: user.id, role: user.role };
   return {
     access_token: this.jwtService.sign(payload),
   };
 }
}