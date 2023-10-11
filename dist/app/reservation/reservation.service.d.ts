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
import { CreateReservationDto } from './dto/create-reservation.dto';
import { ReservationDocument } from 'src/schema/reservation.schema';
import { MenuDocument } from 'src/schema/menu.schema';
import { ReservationOrderDocument } from 'src/schema/reservation_order.schema';
import { HelperService } from '../../helper/helper';
export declare class ReservationService {
    private ReservationModel;
    private ReservationOrderModel;
    private MenuModel;
    private helperService;
    constructor(ReservationModel: Model<ReservationDocument>, ReservationOrderModel: Model<ReservationOrderDocument>, MenuModel: Model<MenuDocument>, helperService: HelperService);
    createReservation(createReservationDto: CreateReservationDto): Promise<import("mongoose").Document<unknown, {}, ReservationDocument> & import("src/schema/reservation.schema").Reservation & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findMenu(payload: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, MenuDocument> & import("src/schema/menu.schema").Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, MenuDocument> & import("src/schema/menu.schema").Menu & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, MenuDocument, "find">;
    insertOrderMenu(payload: any): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, ReservationOrderDocument> & import("src/schema/reservation_order.schema").ReservationOrder & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, Omit<any, "_id">>[]>;
    findAll(filter: {
        pageNo: number;
        size: number;
        date: string;
    }): import("mongoose").Aggregate<any[]>;
    findOrderDetails(id: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, ReservationOrderDocument> & import("src/schema/reservation_order.schema").ReservationOrder & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, ReservationOrderDocument> & import("src/schema/reservation_order.schema").ReservationOrder & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, ReservationOrderDocument, "find">;
    updateReservation(id: string, updateReservationDto: any): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("mongoose").Document<unknown, {}, ReservationDocument> & import("src/schema/reservation.schema").Reservation & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, ReservationDocument, "updateOne">;
    remove(id: number): string;
}
