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
import { CreateAssetDto } from './dto/create-asset.dto';
import { AssetDocument } from 'src/schema/asset.schema';
import { HelperService } from '../../helper/helper';
export declare class AssetService {
    private AssetModel;
    private helperService;
    constructor(AssetModel: Model<AssetDocument>, helperService: HelperService);
    create(createAssetDto: CreateAssetDto): any;
    findOneByName(createAssetDto: CreateAssetDto): import("mongoose").Query<any, any, {}, AssetDocument, "findOne">;
    findAll(filter: {
        pageNo: number;
        size: number;
    }): import("mongoose").Query<any[], any, {}, AssetDocument, "find">;
    findOne(id: string): import("mongoose").Query<any, any, {}, AssetDocument, "findOne">;
    update(update: any, updateAssetDto: any): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, any, {}, AssetDocument, "updateOne">;
    remove(id: number): string;
}
