/// <reference types="multer" />
import { I18nContext } from 'nestjs-i18n';
import { MenuService } from './menu.service';
import { ItemCategoryService } from '../item-category/item-category.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto, UpdateStatusDto } from './dto/update-menu.dto';
import { ConfigService } from "@nestjs/config";
export declare class MenuController {
    private readonly menuService;
    private readonly itemCategoryService;
    private configService;
    constructor(menuService: MenuService, itemCategoryService: ItemCategoryService, configService: ConfigService);
    addMenu(response: any, CreateMenuDto: CreateMenuDto, i18n: I18nContext): any;
    uploadMenu(response: any, file: Express.Multer.File, i18n: I18nContext): any;
    GetMenu(response: any, i18n: I18nContext, filterMenu: {
        pageNo: number;
        size: number;
        categoryId: string;
    }): void;
    GetMenuDetails(id: string, response: any, i18n: I18nContext, filterMenu: {
        pageNo: number;
        size: number;
    }): void;
    updateStatus(UpdateStatusDto: UpdateStatusDto, response: any, i18n: I18nContext): any;
    update(id: string, response: any, updateMenuDto: UpdateMenuDto, i18n: I18nContext): any;
}
