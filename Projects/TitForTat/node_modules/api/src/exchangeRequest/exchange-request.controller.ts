import { Body, Controller, Post, Get, Param, Patch } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('exchange-requests')
export class ExchangeRequestController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() body: any) {
    return this.appService.createExchangeRequest(body);
  }

  @Get(':userId')
  getForUser(@Param('userId') userId: number) {
    return this.appService.getExchangeRequestsForUser(Number(userId));
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body('status') status: 'accepted' | 'declined') {
    return this.appService.updateExchangeRequest(Number(id), status);
  }
}