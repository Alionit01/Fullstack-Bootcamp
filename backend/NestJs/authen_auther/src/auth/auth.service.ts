import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/user.entity';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService : JwtService){
    }

    generateToken(payload: Users){
        return this.jwtService.sign(payload);
    }
}
