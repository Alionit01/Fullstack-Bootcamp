import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
 constructor() {
   super({
     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
     ignoreExpiration: false,
     secretOrKey: 'your_secret_key', // Use env var in real apps
   });
 }

 async validate(payload: any) {
   return { userId: payload.sub, email: payload.username, role: payload.role };
 }
}