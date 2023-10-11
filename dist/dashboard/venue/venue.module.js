"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueModule = void 0;
const common_1 = require("@nestjs/common");
const venue_service_1 = require("./venue.service");
const hash_1 = require("../../helper/hash");
const helper_1 = require("../../helper/helper");
const mongoose_1 = require("@nestjs/mongoose");
const venue_controller_1 = require("./venue.controller");
const category_schema_1 = require("../../schema/category.schema");
const menu_schema_1 = require("../../schema/menu.schema");
const venue_schema_1 = require("../../schema/venue.schema");
const user_schema_1 = require("../../schema/user.schema");
const item_category_service_1 = require("../item-category/item-category.service");
let VenueModule = class VenueModule {
};
exports.VenueModule = VenueModule;
exports.VenueModule = VenueModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'category', schema: category_schema_1.CategorySchema },
                { name: 'menu', schema: menu_schema_1.MenuSchema },
                { name: 'venue', schema: venue_schema_1.VenueSchema },
                { name: 'user', schema: user_schema_1.UserSchema },
            ]),
        ],
        controllers: [venue_controller_1.VenueController],
        providers: [venue_service_1.VenueService, item_category_service_1.ItemCategoryService, hash_1.HashService, helper_1.HelperService],
    })
], VenueModule);
//# sourceMappingURL=venue.module.js.map