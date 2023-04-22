import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    const db = this.configService.get<string>('DATABASE_NAME');
    const apy = this.configService.get<string>('API_KEY');
    return `Hello World! ${db + ' ' + apy}`;
  }

  @Get('/nuevo')
  getNew(): string {
    return 'soy nuevo';
  }
}
