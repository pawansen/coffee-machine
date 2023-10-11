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
import { CreateAuthAdminDto } from './dto/create-auth-admin.dto';
import { VenueDocument } from 'src/schema/venue.schema';
import { UserDocument } from 'src/schema/user.schema';
export declare class AuthService {
    private VenueModel;
    private UserModel;
    constructor(VenueModel: Model<VenueDocument>, UserModel: Model<UserDocument>);
    findOne(createAuthAdminDto: CreateAuthAdminDto): import("mongoose").Query<any, any, {}, VenueDocument, "findOne">;
    login(createAuthAdminDto: CreateAuthAdminDto): import("mongoose").Query<any, any, {}, UserDocument, "findOne">;
    findVenueDetails(id: string): import("mongoose").Query<any, any, {}, VenueDocument, "findOne">;
}
