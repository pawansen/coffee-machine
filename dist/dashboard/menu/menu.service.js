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
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const hash_1 = require("../../helper/hash");
const helper_1 = require("../../helper/helper");
let MenuService = class MenuService {
    constructor(MenuModel, hashService, helperService) {
        this.MenuModel = MenuModel;
        this.hashService = hashService;
        this.helperService = helperService;
    }
    addMenu(createMenuDto) {
        const max = 999999;
        createMenuDto.code = Math.floor(Math.random() * max);
        const category = new this.MenuModel(createMenuDto);
        return category.save();
    }
    findAll(filterMenu) {
        let skip = this.helperService.getOffset(Number(filterMenu.pageNo), Number(filterMenu.size));
        if (filterMenu.categoryId !== undefined && filterMenu.categoryId !== "") {
            return this.MenuModel.find({ categoryId: filterMenu.categoryId });
        }
        else {
            return this.MenuModel.find();
        }
    }
    findOne(id) {
        return this.MenuModel.findOne({ _id: id });
    }
    update(id, updateMenuDto) {
        return this.MenuModel.updateOne({ _id: id }, updateMenuDto);
    }
    remove(id) {
        return this.MenuModel.deleteOne({ _id: id });
    }
    updateOne(UpdateStatusDto) {
        return this.MenuModel.updateOne({ _id: UpdateStatusDto.id }, { status: UpdateStatusDto.status });
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('menu')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        hash_1.HashService,
        helper_1.HelperService])
], MenuService);
//# sourceMappingURL=menu.service.js.map