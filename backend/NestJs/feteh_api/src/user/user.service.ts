import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<Users> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword
    });
    return this.userRepository.save(user);
  } 

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<Users | null> {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Users | null> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) return null;
    const updatedUserData = { ...updateUserDto }; 
    if (updateUserDto.password) {
      updatedUserData.password = await bcrypt.hash(updateUserDto.password, 10);
    } else {
      delete updatedUserData.password; // Avoid accidentally setting password to undefined
    }
    const updatedUser = this.userRepository.merge(user, updatedUserData);
    return this.userRepository.save(updatedUser);
  }
 
  async remove(id: number): Promise<Users | null> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) return null;
 
    await this.userRepository.remove(user);
    return user;
  }}