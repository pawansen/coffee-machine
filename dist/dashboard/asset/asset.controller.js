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
exports.AssetController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const asset_service_1 = require("./asset.service");
const qr_code_controller_1 = require("./qr-code.controller");
const create_asset_dto_1 = require("./dto/create-asset.dto");
const update_asset_dto_1 = require("./dto/update-asset.dto");
const config_1 = require("@nestjs/config");
let AssetController = class AssetController {
    constructor(assetService, qrCodeService, configService) {
        this.assetService = assetService;
        this.qrCodeService = qrCodeService;
        this.configService = configService;
    }
    create(response, createAssetDto, i18n) {
        try {
            this.assetService.findOneByName(createAssetDto).then(async (assets) => {
                if (!assets) {
                    createAssetDto.qrPrefix = null;
                    await this.assetService
                        .create(createAssetDto)
                        .then(async (data) => {
                        let qrData = this.configService.get('api.apiUrl') + "?assetId=" + data._id;
                        this.qrCodeService.generateQrCode(qrData).then(async (qrCode) => {
                            console.log({ qrPrefix: qrCode });
                            await this.assetService.update({ _id: data._id }, { qrPrefix: qrCode }).then((update) => {
                                return response.status(common_1.HttpStatus.CREATED).json({
                                    statusCode: 200,
                                    message: i18n.t('events.asset.add'),
                                    qrCode,
                                });
                            }).then((error) => { console.log(error); });
                        });
                    })
                        .catch((err) => {
                        return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                            statusCode: 400,
                            message: i18n.t('events.asset.error'),
                            error: err,
                        });
                    });
                }
                else {
                    return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                        statusCode: 400,
                        message: i18n.t('events.asset.error'),
                        error: i18n.t('events.bad_Request'),
                    });
                }
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.asset.error'),
                error: i18n.t('events.bad_Request'),
            });
        }
    }
    findAll(response, i18n, filter) {
        this.assetService.findAll(filter).then((data) => {
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                message: i18n.t('events.list'),
                data,
            });
        }).catch((err) => {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.menu.error'),
                error: err,
            });
        });
    }
    findDetails(id, response, body, i18n) {
        this.assetService.findOne(id).then((data) => {
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                message: i18n.t('events.list'),
                data,
            });
        }).catch((err) => {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.menu.error'),
                error: err,
            });
        });
    }
    update(id, updateAssetDto, response, i18n) {
        try {
            this.assetService.update({ _id: id }, updateAssetDto).then((update) => {
                return response.status(common_1.HttpStatus.OK).json({
                    statusCode: 200,
                    message: i18n.t('events.update'),
                    update,
                });
            }).catch((err) => {
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                    statusCode: 400,
                    message: i18n.t('events.asset.error'),
                    error: i18n.t('events.bad_Request'),
                });
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.asset.error'),
                error: i18n.t('events.bad_Request'),
            });
        }
    }
    updateStatus(UpdateStatusDto, response, i18n) {
        try {
            const estatus = [0, 1];
            if (typeof estatus[UpdateStatusDto.status] !== "undefined") {
                this.assetService.update({ _id: UpdateStatusDto.id }, { status: UpdateStatusDto.status }).then((update) => {
                    return response.status(common_1.HttpStatus.OK).json({
                        statusCode: 200,
                        message: i18n.t('events.update'),
                        update,
                    });
                }).catch((err) => {
                    return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                        statusCode: 400,
                        message: i18n.t('events.asset.error'),
                        error: i18n.t('events.bad_Request'),
                    });
                });
            }
            else {
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                    statusCode: 400,
                    message: i18n.t('events.error_status'),
                    error: i18n.t('events.error_status'),
                });
            }
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.asset.error'),
                error: i18n.t('events.bad_Request'),
            });
        }
    }
};
exports.AssetController = AssetController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_asset_dto_1.CreateAssetDto,
        nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], AssetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, nestjs_i18n_1.I18n)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, nestjs_i18n_1.I18nContext, Object]),
    __metadata("design:returntype", void 0)
], AssetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], AssetController.prototype, "findDetails", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_asset_dto_1.UpdateAssetDto, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], AssetController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('/status/update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_asset_dto_1.UpdateStatusDto, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], AssetController.prototype, "updateStatus", null);
exports.AssetController = AssetController = __decorate([
    (0, common_1.Controller)('admin/asset'),
    __metadata("design:paramtypes", [asset_service_1.AssetService, qr_code_controller_1.QrCodeService, config_1.ConfigService])
], AssetController);
//# sourceMappingURL=asset.controller.js.map