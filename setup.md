# comandos de nest

- npm i -g @nestjs/cli instalar el cli en el computador
- nest --version comprobar la versión de nest
- nest --help ver comnados de nest
- nest new nombreProyecto
- npm run start:dev
- nest g co controllers/categories --flat para crear controladores
- nest g s services/products --flat para crear servicios
- nest g mo users para crear modulos (products/users)
- npm i @nestjs/config para las variables de ambiente
- npm i --save joi para validar las variables de entorno
- npm install @nestjs/platform-express
- npm install --save @nestjs/swagger swagger-ui-express documentación con swagger

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

  - para la documentación con swagger debemos añadir este código en el archivo nest-cli.json
    "compilerOptions": {
    "plugins": ["@nestjs/swagger"]
    }
  - tambien cambiar la importación del partialType manualmente en los paquetes de dto's por la siguiente
    import { PartialType } from '@nestjs/swagger';
  - tambien se debe hacer un rm -rf dist desde la consola para que se vean reflejados los cambios
