"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAdminController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const auth_admin_service_1 = require("./auth-admin.service");
const create_auth_admin_dto_1 = require("./dto/create-auth-admin.dto");
const hash_1 = require("../../helper/hash");
const jwt_1 = require("../../helper/jwt");
const config_1 = require("@nestjs/config");
let AuthAdminController = class AuthAdminController {
    constructor(authAdminService, hashService, jwt, configService) {
        this.authAdminService = authAdminService;
        this.hashService = hashService;
        this.jwt = jwt;
        this.configService = configService;
    }
    Login(createAuthAdminDto, response, i18n) {
        try {
            this.authAdminService.findOne(createAuthAdminDto).then((data) => {
                if (data) {
                    this.hashService.comparePassword(createAuthAdminDto.password, data.password).then((match) => {
                        if (match) {
                            const payload = {
                                id: data._id,
                                name: data.name,
                                email: data.email
                            };
                            this.jwt.signPayload(payload).then((token) => {
                                const payloadData = {
                                    id: data._id,
                                    name: data.name,
                                    email: data.email,
                                    status: data.status,
                                    token: token,
                                    logo: data.floorPlanImage = this.configService.get('upload_url') + "/" + data.floorPlanImage
                                };
                                return response.status(common_1.HttpStatus.OK).json({
                                    statusCode: 200,
                                    message: i18n.t('events.login.success'),
                                    payloadData,
                                });
                            });
                        }
                        else {
                            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                                statusCode: 400,
                                message: i18n.t('events.login.email'),
                                error: i18n.t('events.login.password'),
                            });
                        }
                    }).catch((err) => {
                        return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                            statusCode: 400,
                            message: i18n.t('events.login.email'),
                            error: i18n.t('events.login.password'),
                        });
                    });
                }
                else {
                    return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                        statusCode: 400,
                        message: i18n.t('events.login.email'),
                        error: i18n.t('events.login.password'),
                    });
                }
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.venue.error'),
                error: i18n.t('events.bad_Request'),
            });
        }
    }
};
exports.AuthAdminController = AuthAdminController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auth_admin_dto_1.CreateAuthAdminDto, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], AuthAdminController.prototype, "Login", null);
exports.AuthAdminController = AuthAdminController = __decorate([
    (0, common_1.Controller)('admin/auth-admin'),
    __metadata("design:paramtypes", [auth_admin_service_1.AuthAdminService, hash_1.HashService, jwt_1.JwtService, config_1.ConfigService])
], AuthAdminController);
//# sourceMappingURL=auth-admin.controller.js.map