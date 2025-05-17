import { Body, Controller, Get, Post, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('signup')
  async signup(@Body() body: any) {
    const { name, email, password } = body;
    if (!name || !email || !password) throw new BadRequestException('Missing fields');
    try {
      return await this.appService.signup(name, email, password);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post('login')
  async login(@Body() body: any) {
    const { email, password } = body;
    if (!email || !password) throw new BadRequestException('Missing fields');
    try {
      return await this.appService.login(email, password);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
