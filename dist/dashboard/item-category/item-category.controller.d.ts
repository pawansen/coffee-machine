import { I18nContext } from 'nestjs-i18n';
import { ItemCategoryService } from './item-category.service';
import { CreateItemCategoryDto } from './dto/create-item-category.dto';
import { UpdateItemCategoryDto, UpdateStatusCategoryDto } from './dto/update-item-category.dto';
export declare class ItemCategoryController {
    private readonly itemCategoryService;
    constructor(itemCategoryService: ItemCategoryService);
    create(response: any, createItemCategoryDto: CreateItemCategoryDto, i18n: I18nContext): any;
    findAll(response: any, i18n: I18nContext, filter: {
        pageNo: number;
        size: number;
    }): void;
    findOne(id: string, response: any, i18n: I18nContext): void;
    update(id: string, response: any, updateItemCategoryDto: UpdateItemCategoryDto, i18n: I18nContext): any;
    remove(id: string, response: any, i18n: I18nContext): void;
    updateStatus(UpdateStatusCategoryDto: UpdateStatusCategoryDto, response: any, i18n: I18nContext): any;
}
