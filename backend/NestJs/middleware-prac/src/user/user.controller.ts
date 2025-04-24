import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    findAllUsers(): string{
        return "Users"
    }

    @Post()
    addUser(): string{
        return "Users"
    }
}
