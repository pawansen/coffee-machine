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
export type ReservationDocument = Reservation & Document;
export declare class Reservation {
    userid: Types.ObjectId;
    startTime: string;
    endTime: string;
    status: string;
    paymentType: string;
    totalAmount: number;
    totalIteam: number;
    createDate: Date;
}
export declare const ReservationSchema: import("mongoose").Schema<Reservation, import("mongoose").Model<Reservation, any, any, any, Document<unknown, any, Reservation> & Reservation & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Reservation, Document<unknown, {}, Reservation> & Reservation & {
    _id: Types.ObjectId;
}>;
