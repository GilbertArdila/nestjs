import { Module } from '@nestjs/common';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { Client } from 'pg';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { environments } from './enviroments';
import { DatabaseModule } from './database/database.module';
import config from './config';

const client = new Client({
  user: 'gilbert',
  host: 'localhost',
  database: 'store',
  password: '123456',
  port: 5432,
});

client.connect();

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    //injectamos las variables desde el .env y las hacemos globales
    ConfigModule.forRoot({
      //le pasamos el ambiente dinamicamente
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
