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
import { CreateVenueDto, CreateMenuDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { VenueDocument } from 'src/schema/venue.schema';
import { Menu, MenuDocument } from 'src/schema/menu.schema';
import { UserDocument } from 'src/schema/user.schema';
import { HashService } from '../../helper/hash';
import { HelperService } from '../../helper/helper';
export declare class VenueService {
    private VenueModel;
    private MenuModel;
    private UserModel;
    private hashService;
    private helperService;
    constructor(VenueModel: Model<VenueDocument>, MenuModel: Model<MenuDocument>, UserModel: Model<UserDocument>, hashService: HashService, helperService: HelperService);
    addVenue(createVenueDto: CreateVenueDto, file: string): Promise<void>;
    updateVenue(UpdateVenueDto: UpdateVenueDto, file: string): Promise<void>;
    findAllVenue(): import("mongoose").Aggregate<any[]>;
    findVenue(id: any): import("mongoose").Aggregate<any[]>;
    findOneVanue(id: string): import("mongoose").Query<any, any, {}, VenueDocument, "findOne">;
    findOneUser(createVenueDto: CreateVenueDto): import("mongoose").Query<any, any, {}, UserDocument, "findOne">;
    toCheckEmail(UpdateVenueDto: UpdateVenueDto): import("mongoose").Query<any, any, {}, UserDocument, "findOne">;
    findOneVenue(createVenueDto: CreateVenueDto): import("mongoose").Query<any, any, {}, VenueDocument, "findOne">;
    addMenu(createMenuDto: CreateMenuDto): Promise<import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    findAll(filterMenu: {
        pageNo: number;
        size: number;
        categoryId: string;
    }): import("mongoose").Query<(import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, {}, MenuDocument, "find">;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, {}, MenuDocument, "findOne">;
    update(id: string, updateMenuDto: UpdateVenueDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, {}, MenuDocument, "updateOne">;
    updateOne(id: string, updateMenuDto: any): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, any, {}, VenueDocument, "updateOne">;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, {}, MenuDocument> & Menu & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, {}, MenuDocument, "deleteOne">;
}
