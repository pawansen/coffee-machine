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
exports.ItemCategoryController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const item_category_service_1 = require("./item-category.service");
const create_item_category_dto_1 = require("./dto/create-item-category.dto");
const update_item_category_dto_1 = require("./dto/update-item-category.dto");
let ItemCategoryController = class ItemCategoryController {
    constructor(itemCategoryService) {
        this.itemCategoryService = itemCategoryService;
    }
    create(response, createItemCategoryDto, i18n) {
        try {
            this.itemCategoryService
                .findOneByName(createItemCategoryDto)
                .then((catgory) => {
                if (!catgory) {
                    this.itemCategoryService
                        .create(createItemCategoryDto)
                        .then((data) => {
                        return response.status(common_1.HttpStatus.CREATED).json({
                            statusCode: 200,
                            message: i18n.t('events.category.add'),
                            data,
                        });
                    })
                        .catch((err) => {
                        return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                            statusCode: 400,
                            message: i18n.t('events.category.error'),
                            error: err,
                        });
                    });
                }
                else {
                    return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                        statusCode: 400,
                        message: i18n.t('events.category.error'),
                        error: i18n.t('events.bad_Request'),
                    });
                }
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.category.error'),
                error: i18n.t('events.bad_Request'),
            });
        }
    }
    findAll(response, i18n, filter) {
        this.itemCategoryService.findAll(filter).then((data) => {
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                message: i18n.t('events.list'),
                data,
            });
        }).catch((err) => {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.category.error'),
                error: err,
            });
        });
    }
    findOne(id, response, i18n) {
        this.itemCategoryService.findSingle(id).then((data) => {
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                message: i18n.t('events.list'),
                data,
            });
        }).catch((err) => {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.category.error'),
                error: err,
            });
        });
    }
    update(id, response, updateItemCategoryDto, i18n) {
        try {
            let payloadItemCategoryDto = {
                _id: { $ne: id },
                name: updateItemCategoryDto.name
            };
            this.itemCategoryService
                .findOne(payloadItemCategoryDto)
                .then((catgory) => {
                if (!catgory) {
                    this.itemCategoryService
                        .update(id, updateItemCategoryDto)
                        .then((data) => {
                        return response.status(common_1.HttpStatus.OK).json({
                            statusCode: 200,
                            message: i18n.t('events.category.update'),
                            data,
                        });
                    })
                        .catch((err) => {
                        return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                            statusCode: 400,
                            message: i18n.t('events.category.error'),
                            error: err,
                        });
                    });
                }
                else {
                    return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                        statusCode: 400,
                        message: i18n.t('events.category.error'),
                        error: i18n.t('events.bad_Request'),
                    });
                }
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.category.error'),
                error: i18n.t('events.bad_Request'),
            });
        }
    }
    remove(id, response, i18n) {
        this.itemCategoryService.remove(id).then((data) => {
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                message: i18n.t('events.category.delete'),
                data,
            });
        }).catch((err) => {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.category.error'),
                error: err,
            });
        });
    }
    updateStatus(UpdateStatusCategoryDto, response, i18n) {
        const estatus = [0, 1];
        if (typeof estatus[UpdateStatusCategoryDto.status] !== "undefined") {
            this.itemCategoryService.updateOne(UpdateStatusCategoryDto).then((data) => {
                return response.status(common_1.HttpStatus.OK).json({
                    statusCode: 200,
                    message: i18n.t('events.category.delete'),
                    data,
                });
            }).catch((err) => {
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                    statusCode: 400,
                    message: i18n.t('events.category.error'),
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
exports.ItemCategoryController = ItemCategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_item_category_dto_1.CreateItemCategoryDto,
        nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], ItemCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, nestjs_i18n_1.I18n)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, nestjs_i18n_1.I18nContext, Object]),
    __metadata("design:returntype", void 0)
], ItemCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], ItemCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_item_category_dto_1.UpdateItemCategoryDto,
        nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], ItemCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], ItemCategoryController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)('/status/update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_item_category_dto_1.UpdateStatusCategoryDto, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], ItemCategoryController.prototype, "updateStatus", null);
exports.ItemCategoryController = ItemCategoryController = __decorate([
    (0, common_1.Controller)('admin/item-category'),
    __metadata("design:paramtypes", [item_category_service_1.ItemCategoryService])
], ItemCategoryController);
//# sourceMappingURL=item-category.controller.js.map