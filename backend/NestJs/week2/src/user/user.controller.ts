import {  
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  NotFoundException,
  ParseIntPipe, 
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth-guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return this.userService.create(createUserDto);
  }

  // @UseGuards(JwtAuthGuard) 
  @Get()
  async findAll(): Promise<Users[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Users>{
    const user = await this.userService.findOne(id);
    if(!user) throw new NotFoundException('User no found');
    return user;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<{ message: string }> {
    const updated = await this.userService.update(id, updateUserDto);
    if (!updated) throw new NotFoundException('User not found for update');
    return { message: 'Record updated successfully!' };
  } 

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise< { message: string }> {
    const deleted = await this.userService.remove(id);
    if (!deleted) throw new NotFoundException('User not found for deletion');
    return {message: 'User deleted successfully!' };
  }
}
