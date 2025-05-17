import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

interface User {
  id: number;
  name: string;
  email: string;
  password: string; // hashed
}

@Injectable()
export class AppService {
  private users: User[] = [];
  private idCounter = 1;

  constructor(private jwtService: JwtService) {}

  async signup(name: string, email: string, password: string) {
    if (this.users.find(u => u.email === email)) {
      throw new Error('Email already exists');
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = { id: this.idCounter++, name, email, password: hashed };
    this.users.push(user);
    const token = this.jwtService.sign({ sub: user.id, email: user.email, name: user.name });
    return { user: { id: user.id, name: user.name, email: user.email }, token };
  }

  async login(email: string, password: string) {
    const user = this.users.find(u => u.email === email);
    if (!user) throw new Error('Invalid credentials');
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Invalid credentials');
    const token = this.jwtService.sign({ sub: user.id, email: user.email, name: user.name });
    return { user: { id: user.id, name: user.name, email: user.email }, token };
  }

  
}
