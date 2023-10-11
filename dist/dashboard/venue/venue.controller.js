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
exports.VenueController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const csvtojson = require('csvtojson');
const venue_service_1 = require("./venue.service");
const item_category_service_1 = require("../item-category/item-category.service");
const create_venue_dto_1 = require("./dto/create-venue.dto");
const update_venue_dto_1 = require("./dto/update-venue.dto");
const config_1 = require("@nestjs/config");
let VenueController = class VenueController {
    constructor(venueService, itemCategoryService, configService) {
        this.venueService = venueService;
        this.itemCategoryService = itemCategoryService;
        this.configService = configService;
    }
    addVenue(response, CreateVenueDto, i18n, file) {
        try {
            console.log('file', file);
            let filePath = '';
            if (file) {
                filePath = file.path;
            }
            this.venueService.findOneUser(CreateVenueDto).then((isEmail) => {
                if (!isEmail) {
                    this.venueService.addVenue(CreateVenueDto, filePath).then((data) => {
                        return response.status(common_1.HttpStatus.CREATED).json({
                            statusCode: 200,
                            message: i18n.t('events.venue.add'),
                            data,
                        });
                    });
                }
                else {
                    return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                        statusCode: 400,
                        message: i18n.t('events.venue.isEmail'),
                        error: i18n.t('events.bad_Request'),
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
    getVenue(response, i18n) {
        this.venueService.findAllVenue().then((data) => {
            for (let i = 0; i < data.length; i++) {
                data[i].profileImage = this.configService.get('upload_url') + "/" + data[i].floorPlanImage;
                data[i].role = data[i].roleStatus.role;
                delete data[i].roleStatus;
            }
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                message: i18n.t('events.list'),
                data,
            });
        }).catch((err) => {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.venue.error'),
                error: err,
            });
        });
    }
    getVenueDetail(id, response, i18n) {
        this.venueService.findVenue(id).then((data) => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                data[i].profileImage = this.configService.get('upload_url') + "/" + data[i].floorPlanImage;
                data[i].role = data[i].roleStatus.role;
                delete data[i].roleStatus;
            }
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                message: i18n.t('events.list'),
                data,
            });
        }).catch((err) => {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.venue.error'),
                error: err,
            });
        });
    }
    updateVenue(response, UpdateVenueDto, i18n, file) {
        try {
            let filePath = '';
            if (file) {
                filePath = file.path;
            }
            this.venueService.updateVenue(UpdateVenueDto, filePath).then((data) => {
                return response.status(common_1.HttpStatus.CREATED).json({
                    statusCode: 200,
                    message: i18n.t('events.venue.add'),
                    data,
                });
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
    updateStatus(UpdateStatusDto, response, i18n) {
        const estatus = [0, 1];
        if (typeof estatus[UpdateStatusDto.status] !== "undefined") {
            this.venueService.updateOne(UpdateStatusDto.id, { status: Number(UpdateStatusDto.status) }).then((data) => {
                return response.status(common_1.HttpStatus.OK).json({
                    statusCode: 200,
                    message: i18n.t('events.venue.delete'),
                    data,
                });
            }).catch((err) => {
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                    statusCode: 400,
                    message: i18n.t('events.venue.error'),
                    error: err,
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
};
exports.VenueController = VenueController;
__decorate([
    (0, common_1.Post)('add-venue'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('floorPlanImage', {
        storage: (0, multer_1.diskStorage)({
            destination: 'public/venue',
            filename: (req, file, cb) => {
                console.log('body file', file);
                cb(null, file.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_venue_dto_1.CreateVenueDto,
        nestjs_i18n_1.I18nContext, Object]),
    __metadata("design:returntype", void 0)
], VenueController.prototype, "addVenue", null);
__decorate([
    (0, common_1.Get)('get-venue'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], VenueController.prototype, "getVenue", null);
__decorate([
    (0, common_1.Get)('get-venue/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], VenueController.prototype, "getVenueDetail", null);
__decorate([
    (0, common_1.Put)('update-venue'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('floorPlanImage', {
        storage: (0, multer_1.diskStorage)({
            destination: 'public/venue',
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_venue_dto_1.UpdateVenueDto,
        nestjs_i18n_1.I18nContext, Object]),
    __metadata("design:returntype", void 0)
], VenueController.prototype, "updateVenue", null);
__decorate([
    (0, common_1.Put)('status/update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_venue_dto_1.UpdateStatusDto, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], VenueController.prototype, "updateStatus", null);
exports.VenueController = VenueController = __decorate([
    (0, common_1.Controller)('admin/venue'),
    __metadata("design:paramtypes", [venue_service_1.VenueService,
        item_category_service_1.ItemCategoryService,
        config_1.ConfigService])
], VenueController);
//# sourceMappingURL=venue.controller.js.map