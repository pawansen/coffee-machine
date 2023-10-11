"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuModule = void 0;
const common_1 = require("@nestjs/common");
const menu_service_1 = require("./menu.service");
const hash_1 = require("../../helper/hash");
const helper_1 = require("../../helper/helper");
const mongoose_1 = require("@nestjs/mongoose");
const menu_controller_1 = require("./menu.controller");
const category_schema_1 = require("../../schema/category.schema");
const menu_schema_1 = require("../../schema/menu.schema");
const item_category_service_1 = require("../item-category/item-category.service");
let MenuModule = class MenuModule {
};
exports.MenuModule = MenuModule;
exports.MenuModule = MenuModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'category', schema: category_schema_1.CategorySchema },
                { name: 'menu', schema: menu_schema_1.MenuSchema }
            ]),
        ],
        controllers: [menu_controller_1.MenuController],
        providers: [menu_service_1.MenuService, item_category_service_1.ItemCategoryService, hash_1.HashService, helper_1.HelperService],
    })
], MenuModule);
//# sourceMappingURL=menu.module.js.map