import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation globally
  app.useGlobalPipes(new ValidationPipe({
    transform: true,  // This enables automatic transformation of request data
    whitelist: true,  // Strips out properties not defined in the DTO
    forbidNonWhitelisted: true,  // Throws error for non-whitelisted properties
  }));

  await app.listen(3000);
}
bootstrap();
