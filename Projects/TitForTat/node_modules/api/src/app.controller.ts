import { Body, Controller, Get, Post, Put, Delete, Param, BadRequestException } from '@nestjs/common';
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

@Controller('offers')
export class OfferController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() body: any) {
    return this.appService.createOffer(body);
  }

  @Get()
  findAll() {
    return this.appService.getOffers();
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: number) {
    return this.appService.getOffersByUser(Number(userId));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.appService.updateOffer(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.appService.deleteOffer(Number(id));
  }
}
