import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('offers')
export class OfferController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() body: any) {
    return this.appService.createOffer(body);
  }

  @Get()
  async findAll() {
    const offers = await this.appService.getOffers();
    return offers;
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