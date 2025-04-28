import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import passport from "passport";
import { Strategy } from "passport-local";
import { Users } from "src/users/user.entity";
import { UsersService } from "src/users/users.service";

export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userService: UsersService){
        super();
    }

    async validate(username: string, password: string): Promise<Users> {
        const user = this.userService.getUserByUserName(username);
        if (!user || user.password !== password) {
            throw new UnauthorizedException();
        }
        return user;
    }
    
}