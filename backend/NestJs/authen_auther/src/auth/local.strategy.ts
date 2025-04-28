import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import passport from "passport";
import { Strategy } from "passport-local";
import { Users } from "src/users/user.entity";
import { UsersService } from "src/users/users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UsersService) {
        super();
    }



    async validate(username: string, password: string): Promise<Users> {
        const user = this.userService.getUserByUserName(username);

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        if (user.password !== password) {
            throw new UnauthorizedException('Invalid password');
        }

        return user;
    }

}