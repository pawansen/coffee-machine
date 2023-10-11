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
import { Model } from 'mongoose';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto, UpdateStatusDto } from './dto/update-menu.dto';
import { Menu, MenuDocument } from 'src/schema/menu.schema';
import { HashService } from '../../helper/hash';
import { HelperService } from '../../helper/helper';
export declare class MenuService {
    private MenuModel;
    private hashService;
    private helperService;
    constructor(MenuModel: Model<MenuDocument>, hashService: HashService, helperService: HelperService);
    addMenu(createMenuDto: CreateMenuDto): Promise<import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(filterMenu: {
        pageNo: number;
        size: number;
        categoryId: string;
    }): import("mongoose").Query<(import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MenuDocument, "find">;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MenuDocument, "findOne">;
    update(id: string, updateMenuDto: UpdateMenuDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MenuDocument, "updateOne">;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MenuDocument, "deleteOne">;
    updateOne(UpdateStatusDto: UpdateStatusDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MenuDocument, "updateOne">;
}
