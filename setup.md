# comandos de nest

- npm run start:dev
- nest g co controllers/categories --flat para crear controladores
- nest g s services/products --flat para crear servicios
- nest g mo users para crear modulos

## adding new dependency

- npm i class-validator class-transformer
- npm i @nestjs/mapped-types

### to be aware

- para activar las validaciones vamos al archivo main.ts y
  hacemos la siguiente importación: import { ValidationPipe } from '@nestjs/common';
  luego activamos el pipe de forma global con la siguiente linea: app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  antes de poner en eschucha el puerto, el whitelist lo que hace es ignorar los atributos que no esten en el dto, si ponemos forbidNonWhitelisted: true, no solo lo ignora sino lo alerta
