"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const asset_service_1 = require("./asset.service");
const qr_code_controller_1 = require("./qr-code.controller");
const asset_controller_1 = require("./asset.controller");
const asset_schema_1 = require("../../schema/asset.schema");
const config_1 = require("@nestjs/config");
const auth_1 = require("../../helper/auth");
const jwt_1 = require("../../helper/jwt");
const helper_1 = require("../../helper/helper");
let AssetModule = class AssetModule {
};
exports.AssetModule = AssetModule;
exports.AssetModule = AssetModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            mongoose_1.MongooseModule.forFeature([{ name: 'asset', schema: asset_schema_1.AssetSchema }]),
        ],
        controllers: [asset_controller_1.AssetController],
        providers: [asset_service_1.AssetService, qr_code_controller_1.QrCodeService, auth_1.AuthGuard, jwt_1.JwtService, helper_1.HelperService],
    })
], AssetModule);
//# sourceMappingURL=asset.module.js.map