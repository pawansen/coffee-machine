import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { HashService } from '../../helper/hash';
import { HelperService } from '../../helper/helper';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuController } from './menu.controller';
import { CategorySchema } from '../../schema/category.schema';
import { MenuSchema } from '../../schema/menu.schema';
import { ItemCategoryService } from '../item-category/item-category.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'category', schema: CategorySchema },
      { name: 'menu', schema: MenuSchema }
    ]),
  ],
  controllers: [MenuController],
  providers: [MenuService, ItemCategoryService, HashService, HelperService],
})
export class MenuModule { }
