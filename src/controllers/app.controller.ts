import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/query')
  executeQuery(@Body() body: string): any {
    return this.appService.executeQuery(body["query"]);
  }
}
