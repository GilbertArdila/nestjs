# comandos de nest

- npm run start:dev
- nest g co controllers/categories --flat para crear controladores
- nest g s services/products --flat para crear servicios

## adding new dependency

- npm i class-validator class-transformer
- npm i @nestjs/mapped-types

### to be aware

- para activar las validaciones vamos al archivo main.ts y
  hacemos la siguiente importación: import { ValidationPipe } from '@nestjs/common';
  luego activamos el pipe de forma global con la siguiente linea: app.useGlobalPipes(new ValidationPipe());
  antes de poner en eschucha el puerto
