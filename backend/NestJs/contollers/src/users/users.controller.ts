import { Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(){
        return ['user1','user2','user3']
    }

    @Get(':id')
    findOne(@Param('id') id: String) {
        return 'user ${id}';
    }

    @Post()
    create(@Body() body){
        return {
            massage: 'User Created',
            user: body,
        }
    }

    @Put('user/:id')
    updateUser(@Param('id') id: string){
        return 'User ${id} Updated'
    }

    @Patch('user/:id')
    updatepartial(@Param('id') id: string, @Body() body){
        return {
            massage: 'User Partially Updated',
            changes: body,
        }
    }


    @Delete('user/:id')
    deleteUser(@Param('id') id: string){
        return 'User ${id} Deleted'
    }

}