import { Global, Module } from '@nestjs/common';
import { Client } from 'pg';

const client = new Client({
  user: 'gilbert',
  host: 'localhost',
  database: 'store',
  password: '123456',
  port: 5432,
});

client.connect();

@Global()
@Module({
  providers: [
    {
      provide: 'PG',
      useValue: client,
    },
  ],
  exports: ['PG'],
})
export class DatabaseModule {}
