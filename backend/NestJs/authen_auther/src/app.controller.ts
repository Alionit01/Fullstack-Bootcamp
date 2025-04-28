import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller('/app')
export class AppController {
  constructor() {}

  @Post("/login")
  @UseGuards(AuthGuard("local"))
  login(): string {
    return "login route";
  }
}
