/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model, Types } from 'mongoose';
import { CreateItemCategoryDto } from './dto/create-item-category.dto';
import { UpdateItemCategoryDto, UpdateStatusCategoryDto } from './dto/update-item-category.dto';
import { GetItemCategoryDto } from './dto/get-item-category.dto';
import { Category, CategoryDocument } from 'src/schema/category.schema';
import { HelperService } from '../../helper/helper';
export declare class ItemCategoryService {
    private ItemCategoryModel;
    private helperService;
    constructor(ItemCategoryModel: Model<CategoryDocument>, helperService: HelperService);
    create(createItemCategoryDto: CreateItemCategoryDto): Promise<import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    }>;
    findOneByName(createItemCategoryDto: CreateItemCategoryDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    }, {}, CategoryDocument, "findOne">;
    findAll(filter: {
        pageNo: number;
        size: number;
    }): import("mongoose").Query<(import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    }, {}, CategoryDocument, "find">;
    findAllList(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    }, {}, CategoryDocument, "find">;
    findOne(getItemCategoryDto: GetItemCategoryDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    }, {}, CategoryDocument, "findOne">;
    findSingle(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    }, {}, CategoryDocument, "findOne">;
    update(id: string, updateItemCategoryDto: UpdateItemCategoryDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    }, {}, CategoryDocument, "updateOne">;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    }, {}, CategoryDocument, "deleteOne">;
    updateOne(UpdateStatusCategoryDto: UpdateStatusCategoryDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, CategoryDocument> & Category & Document & {
        _id: Types.ObjectId;
    }, {}, CategoryDocument, "updateOne">;
}
