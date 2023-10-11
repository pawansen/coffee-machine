"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const nestjs_i18n_1 = require("nestjs-i18n");
const path = require("path");
require("dotenv/config");
const auth_middleware_1 = require("./middleware/auth.middleware");
const reservation_module_1 = require("./app/reservation/reservation.module");
const item_category_module_1 = require("./dashboard/item-category/item-category.module");
const menu_module_1 = require("./dashboard/menu/menu.module");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
const app_controller_1 = require("./app.controller");
const jwt_1 = require("./helper/jwt");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes();
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.config]
            }),
            reservation_module_1.ReservationModule,
            item_category_module_1.ItemCategoryModule,
            menu_module_1.MenuModule,
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_DB_URL, {
                dbName: process.env.MONGO_DATABASE,
            }),
            nestjs_i18n_1.I18nModule.forRoot({
                fallbackLanguage: 'en',
                loaderOptions: {
                    path: path.join(__dirname, '/i18n/'),
                    watch: true,
                },
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [jwt_1.JwtService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map