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
exports.ItemCategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const helper_1 = require("../../helper/helper");
let ItemCategoryService = class ItemCategoryService {
    constructor(ItemCategoryModel, helperService) {
        this.ItemCategoryModel = ItemCategoryModel;
        this.helperService = helperService;
    }
    create(createItemCategoryDto) {
        const category = new this.ItemCategoryModel(createItemCategoryDto);
        return category.save();
    }
    findOneByName(createItemCategoryDto) {
        return this.ItemCategoryModel.findOne({ name: createItemCategoryDto.name });
    }
    findAll(filter) {
        let limit = (filter.size !== undefined) ? filter.size : 50;
        let offset = (filter.pageNo !== undefined) ? this.helperService.getOffset(Number(filter.pageNo), Number(filter.size)) : 0;
        return this.ItemCategoryModel.find();
    }
    findAllList() {
        return this.ItemCategoryModel.find();
    }
    findOne(getItemCategoryDto) {
        return this.ItemCategoryModel.findOne(getItemCategoryDto);
    }
    findSingle(id) {
        return this.ItemCategoryModel.findOne({ _id: id });
    }
    update(id, updateItemCategoryDto) {
        return this.ItemCategoryModel.updateOne({ _id: id }, updateItemCategoryDto);
    }
    remove(id) {
        return this.ItemCategoryModel.deleteOne({ _id: id });
    }
    updateOne(UpdateStatusCategoryDto) {
        console.log({ _id: UpdateStatusCategoryDto.id });
        return this.ItemCategoryModel.updateOne({ _id: UpdateStatusCategoryDto.id }, { status: UpdateStatusCategoryDto.status });
    }
};
exports.ItemCategoryService = ItemCategoryService;
exports.ItemCategoryService = ItemCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('category')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        helper_1.HelperService])
], ItemCategoryService);
//# sourceMappingURL=item-category.service.js.map