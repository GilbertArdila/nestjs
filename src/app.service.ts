import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getHello(): string {
    const db = this.configService.get<string>('DATABASE_NAME');
    const apy = this.configService.get<string>('APY_KEY');
    return `Hello World! ${db + apy}`;
  }
}
