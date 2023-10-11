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
import { Types, Document } from 'mongoose';
export type AssetDocument = Asset & Document;
export declare class Asset {
    venueId: Types.ObjectId;
    assetName: string;
    qrPrefix: string;
    assetType: string;
    description: string;
    locationOnFloorPlan: string;
    currentStatus: string;
    status: number;
    createDate: Date;
}
export declare const AssetSchema: import("mongoose").Schema<Asset, import("mongoose").Model<Asset, any, any, any, Document<unknown, any, Asset> & Asset & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Asset, Document<unknown, {}, Asset> & Asset & {
    _id: Types.ObjectId;
}>;
