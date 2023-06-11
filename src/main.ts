import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('PORT', PORT);
  await app.listen(PORT);
}
bootstrap();
