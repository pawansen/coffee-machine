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
exports.ReservationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const helper_1 = require("../../helper/helper");
let ReservationService = class ReservationService {
    constructor(ReservationModel, ReservationOrderModel, MenuModel, helperService) {
        this.ReservationModel = ReservationModel;
        this.ReservationOrderModel = ReservationOrderModel;
        this.MenuModel = MenuModel;
        this.helperService = helperService;
    }
    createReservation(createReservationDto) {
        const schema = new this.ReservationModel(createReservationDto);
        return schema.save();
    }
    findMenu(payload) {
        return this.MenuModel.find(payload);
    }
    insertOrderMenu(payload) {
        return this.ReservationOrderModel.insertMany(payload);
    }
    findAll(filter) {
        let limit = (filter.size !== undefined) ? Number(filter.size) : 10;
        let offset = (filter.pageNo !== undefined) ? Number(this.helperService.getOffset(Number(filter.pageNo), Number(filter.size))) : 0;
        let whr = { totalAmount: { $gt: 0 } };
        filter.date = new Date().toISOString().split('T')[0];
        console.log(filter.date);
        return this.ReservationModel.aggregate([
            {
                "$lookup": {
                    "from": "reservation_orders",
                    "localField": "_id",
                    "foreignField": "reservationId",
                    "as": "order_details",
                    "pipeline": [
                        { "$lookup": {
                                "from": "menus",
                                "let": { "mid": "$menuId" },
                                "pipeline": [
                                    { "$match": { "$expr": { "$eq": ["$_id", "$$mid"] } } },
                                    { "$project": { _id: 0, name: 1, description: 1 } }
                                ],
                                "as": "menuInfo"
                            } },
                        { "$project": { reservationId: 1, menuId: 1, description: 1, quantity: 1, price: 1, totalPrice: 1, menuInfo: { $arrayElemAt: ["$menuInfo", 0] } } }
                    ],
                }
            },
            {
                $project: { _id: 1, assetId: 1, userid: 1, startTime: 1, endTime: 1, status: 1, totalAmount: 1, subTotalAmount: "$totalAmount", totalIteam: 1, orderDate: "$createDate", order_details: "$order_details" }
            },
            { "$sort": { createDate: -1 } },
        ]);
    }
    findOrderDetails(id) {
        return this.ReservationOrderModel.find({ reservationId: id });
    }
    updateReservation(id, updateReservationDto) {
        return this.ReservationModel.updateOne({ _id: id }, updateReservationDto);
    }
    remove(id) {
        return `This action removes a #${id} reservation`;
    }
};
exports.ReservationService = ReservationService;
exports.ReservationService = ReservationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('reservation')),
    __param(1, (0, mongoose_2.InjectModel)('reservation_order')),
    __param(2, (0, mongoose_2.InjectModel)('menu')),
    __metadata("design:paramtypes", [mongoose_1.Model, mongoose_1.Model, mongoose_1.Model, helper_1.HelperService])
], ReservationService);
//# sourceMappingURL=reservation.service.js.map