import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });

  app.useStaticAssets(join(__dirname, '../public'), {
    prefix: '/public/',
  });
  app.setBaseViewsDir(join(__dirname, '../views'));
  app.setViewEngine('hbs');


  // enable validation globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // enable DI for class-validator
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(configService.get<number>('port'));
  console.log('EL running on ' + configService.get<number>('port'));
}
bootstrap();
