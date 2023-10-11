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
exports.ReservationController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const mongoose = require("mongoose");
const moment = require("moment");
const reservation_service_1 = require("./reservation.service");
const create_reservation_dto_1 = require("./dto/create-reservation.dto");
let ReservationController = class ReservationController {
    constructor(reservationService) {
        this.reservationService = reservationService;
    }
    create(createReservationOrderDto, response, i18n) {
        try {
            const createReservation = {
                startTime: moment().toISOString()
            };
            let menu = createReservationOrderDto.menu;
            let menuIds = menu.map((a) => new mongoose.Types.ObjectId(a.menuId));
            this.reservationService.findMenu({ _id: { $in: menuIds } }).then((menuData) => {
                let order;
                let orderPayload = [];
                this.reservationService.createReservation(createReservation).then((data) => {
                    let totalAmount = 0;
                    let totalIteam = 0;
                    for (let row of menuData) {
                        let quanlityData = menu.find((o) => o.menuId === row._id.toString());
                        let actitalPrice = row.price - (row.price * row.discount / 100);
                        let order = {
                            reservationId: data._id,
                            menuId: row._id.toString(),
                            quantity: quanlityData.quantity,
                            description: quanlityData.description,
                            price: row.price,
                            discount: row.discount,
                            totalPrice: quanlityData.quantity * actitalPrice
                        };
                        orderPayload.push(order);
                        totalAmount += order.totalPrice;
                        totalIteam += quanlityData.quantity;
                    }
                    this.reservationService.insertOrderMenu(orderPayload).then(async (order) => {
                        await this.reservationService.updateReservation(data._id, { totalAmount: totalAmount, totalIteam: totalIteam });
                        return response.status(common_1.HttpStatus.CREATED).json({
                            statusCode: 200,
                            message: i18n.t('events.reservation.add'),
                            order,
                        });
                    });
                });
            });
        }
        catch (err) {
            console.log(err);
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.reservation.error'),
                error: err,
            });
        }
    }
    findAll(response, i18n, filter) {
        this.reservationService.findAll(filter).then((data) => {
            for (let i = 0; i < data.length; i++) {
                data[i].tax = ((data[i].totalAmount * 18) / 100).toFixed(2);
                data[i].discount = 0;
                for (let row of data[i].order_details) {
                    data[i].discount += row.discount;
                }
                data[i].totalAmount = (Number(data[i].subTotalAmount) + Number(data[i].tax)) - Number(data[i].discount);
            }
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                message: i18n.t('events.list'),
                data,
            });
        }).catch((err) => {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.bad_Request'),
                error: err,
            });
        });
    }
    findOne(id, response, i18n) {
        this.reservationService.findOrderDetails(id).then((data) => {
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: 200,
                message: i18n.t('events.list'),
                data,
            });
        }).catch((err) => {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: i18n.t('events.bad_Request'),
                error: err,
            });
        });
    }
};
exports.ReservationController = ReservationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reservation_dto_1.CreateReservationOrderDto, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, nestjs_i18n_1.I18n)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, nestjs_i18n_1.I18nContext, Object]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, nestjs_i18n_1.I18n)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, nestjs_i18n_1.I18nContext]),
    __metadata("design:returntype", void 0)
], ReservationController.prototype, "findOne", null);
exports.ReservationController = ReservationController = __decorate([
    (0, common_1.Controller)('reservation'),
    __metadata("design:paramtypes", [reservation_service_1.ReservationService])
], ReservationController);
//# sourceMappingURL=reservation.controller.js.map