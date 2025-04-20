import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from 'src/user/users.service';
import { User } from './user.interface';

@Controller('user')
export class UserController {

    constructor(private usersService: UsersService) {}

    @Get(':id')
    getUser(@Param('id') id: number): User | {massage: string}{
        return this.usersService.getUser(+id);
    }

    @Patch(':id')   
    userUpdate(@Param('id') id: number, @Body() updateUserDto: Partial<User>): User | {massage: string}{
        return this.usersService.updateUser(+id, updateUserDto);
    }

    @Post()
    createUser(@Body() newUser: {name: string, email: string}): User {
        return this.usersService.createUser(newUser);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: {new: string; email: string} ){
        return this.usersService.updateUser(Number(id), updateUserDto)
    }
    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return this.usersService.deleteUser(+id);
    }


}
