import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { AppModule } from './app.module';

async function bootstrap() {
// const {API_PORT} =appSettings
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  require('dotenv').config();

  await app.listen(process.env.API_PORT);
  console.log('---------------------------------------------');
  console.log(
    `Application :\nhttp://localhost:${process.env.API_PORT} \n\nGraphQL:\nhttp://localhost:${process.env.API_PORT}/graphql`,
  );
  console.log('---------------------------------------------');
}
bootstrap();
