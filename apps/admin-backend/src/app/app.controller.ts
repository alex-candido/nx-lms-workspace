import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async registerUser(@Body() data: { hello: string }) {
    return this.appService.setData(data);
  }

  @Get()
  async getData() {
    return this.appService.getData();
  }
}
