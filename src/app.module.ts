import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from './enviroments';
import config from './config';

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
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
