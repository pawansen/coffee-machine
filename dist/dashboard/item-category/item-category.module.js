"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const item_category_service_1 = require("./item-category.service");
const item_category_controller_1 = require("./item-category.controller");
const category_schema_1 = require("../../schema/category.schema");
const helper_1 = require("../../helper/helper");
let ItemCategoryModule = class ItemCategoryModule {
};
exports.ItemCategoryModule = ItemCategoryModule;
exports.ItemCategoryModule = ItemCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'category', schema: category_schema_1.CategorySchema }]),
        ],
        controllers: [item_category_controller_1.ItemCategoryController],
        providers: [item_category_service_1.ItemCategoryService, helper_1.HelperService],
    })
], ItemCategoryModule);
//# sourceMappingURL=item-category.module.js.map