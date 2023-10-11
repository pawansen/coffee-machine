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
exports.MenuController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const csvtojson = require('csvtojson');
const menu_service_1 = require("./menu.service");
const item_category_service_1 = require("../item-category/item-category.service");
const create_menu_dto_1 = require("./dto/create-menu.dto");
const update_menu_dto_1 = require("./dto/update-menu.dto");
const config_1 = require("@nestjs/config");
let MenuController = class MenuController {
    constructor(menuService, itemCategoryService, configService) {
        this.menuService = menuService;
        this.itemCategoryService = itemCategoryService;
        this.configService = configService;
    }
    addMenu(response, CreateMenuDto, i18n) {
        try {
            this.menuService.addMenu(CreateMenuDto).then((data) => {
                return response.status(common_1.HttpStatus.CREATED).json({
                    statusCode: 200,
                    message: i18n.t('events.menu.add'),
                    data,
                });
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.menu.error'),
                error: i18n.t('events.bad_Request'),
            });
        }
    }
    uploadMenu(response, file, i18n) {
        try {
            this.itemCategoryService.findAllList().then((category) => {
                const newObj = {};
                category.forEach((item) => {
                    newObj[item._id] = item.name;
                });
                const filePath = file.path;
                csvtojson()
                    .fromFile(filePath)
                    .then((source) => {
                    let obj = [];
                    for (const row of source) {
                        const payload = {
                            name: row.Name,
                            description: row.Description,
                            price: row.Price,
                            discount: 0,
                            venueId: '650147c72190733aba659f26',
                            categoryId: Object.keys(newObj).find((key) => newObj[key] === row.Category),
                        };
                        obj.push(payload);
                        this.menuService.addMenu(payload).then((data) => {
                            console.log(data);
                        });
                    }
                    return response.status(common_1.HttpStatus.CREATED).json({
                        statusCode: 200,
                        message: i18n.t('events.menu.add'),
                        obj
                    });
                });
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.menu.error'),
                error: i18n.t('events.bad_Request'),
            });
        }
    }
    GetMenu(response, i18n, filterMenu) {
        this.menuService.findAll(filterMenu).then((data) => {
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
    GetMenuDetails(id, response, i18n, filterMenu) {
        this.menuService.findOne(id).then((data) => {
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
    updateStatus(UpdateStatusDto, response, i18n) {
        const estatus = [0, 1];
        if (typeof estatus[UpdateStatusDto.status] !== "undefined") {
            this.menuService.updateOne(UpdateStatusDto).then((data) => {
                return response.status(common_1.HttpStatus.OK).json({
                    statusCode: 200,
                    message: i18n.t('events.menu.delete'),
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
        else {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.error_status'),
                error: i18n.t('events.error_status'),
            });
        }
    }
    update(id, response, updateMenuDto, i18n) {
        try {
            this.menuService
                .update(id, updateMenuDto)
                .then((data) => {
                return response.status(common_1.HttpStatus.OK).json({
                    statusCode: 200,
                    message: i18n.t('events.menu.update'),
                    data,
                });
            })
                .catch((err) => {
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                    statusCode: 400,
                    message: i18n.t('events.menu.error'),
                    error: err,
                });
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.menu.error'),
                error: i18n.t('events.bad_Request'),
            });
        }
    }
};
exports.MenuController = MenuController;
__decorate([
    (0, common_1.Post)('add-menu'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_menu_dto_1.CreateMenuDto,
        nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "addMenu", null);
__decorate([
    (0, common_1.Post)('upload-menu'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: 'public/excel',
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "uploadMenu", null);
__decorate([
    (0, common_1.Get)('get-menu'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, nestjs_i18n_1.I18n)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, nestjs_i18n_1.I18nContext, Object]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "GetMenu", null);
__decorate([
    (0, common_1.Get)('get-menu/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __param(3, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, nestjs_i18n_1.I18nContext, Object]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "GetMenuDetails", null);
__decorate([
    (0, common_1.Put)('status/update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_menu_dto_1.UpdateStatusDto, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Put)('update-menu/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_menu_dto_1.UpdateMenuDto,
        nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], MenuController.prototype, "update", null);
exports.MenuController = MenuController = __decorate([
    (0, common_1.Controller)('admin/menu'),
    __metadata("design:paramtypes", [menu_service_1.MenuService,
        item_category_service_1.ItemCategoryService,
        config_1.ConfigService])
], MenuController);
//# sourceMappingURL=menu.controller.js.map