import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { I18nModule } from 'nestjs-i18n';
import * as path from 'path';
import 'dotenv/config';
import { AuthMiddleware } from './middleware/auth.middleware'
import { ReservationModule } from './app/reservation/reservation.module';
import { ItemCategoryModule } from './dashboard/item-category/item-category.module';
import { MenuModule } from './dashboard/menu/menu.module';
import { ConfigModule } from '@nestjs/config';
import { config } from './config/configuration';
import { join } from 'path';
import { AppController } from './app.controller'
import { JwtService } from './helper/jwt'


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    ReservationModule,
    ItemCategoryModule,
    MenuModule,
    MongooseModule.forRoot(process.env.MONGO_DB_URL, {
      dbName: process.env.MONGO_DATABASE,
    }),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
    })
  ],
  controllers: [AppController],
  providers: [JwtService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes();
  }
}
