import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemCategoryService } from './item-category.service';
import { ItemCategoryController } from './item-category.controller';
import { CategorySchema } from '../../schema/category.schema';
import { HelperService } from '../../helper/helper';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'category', schema: CategorySchema }]),
  ],
  controllers: [ItemCategoryController],
  providers: [ItemCategoryService, HelperService],
})
export class ItemCategoryModule {}
