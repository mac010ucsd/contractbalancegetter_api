import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { balanceGetterDto } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('getUserBalance')
  async getUserBalance(@Body() payload :balanceGetterDto): Promise<string> {
    return await this.appService.getUserBalance(payload.pKey, payload.dest);
  }
}
