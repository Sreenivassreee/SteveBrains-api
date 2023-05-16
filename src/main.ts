import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  require('dotenv').config();
  console.log(
    "bootstrap"
  )
  await app.listen(process.env.API_PORT);
  console.log("---------------------------------------------");
  console.log(`Application :\nhttp://localhost:${process.env.API_PORT} \n\nGraphQL:\nhttp://localhost:${process.env.API_PORT}/graphql`);
  console.log("---------------------------------------------");
}
bootstrap();
