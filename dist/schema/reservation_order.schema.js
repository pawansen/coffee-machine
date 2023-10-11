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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationOrderSchema = exports.ReservationOrder = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ReservationOrder = class ReservationOrder {
};
exports.ReservationOrder = ReservationOrder;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'reservation' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ReservationOrder.prototype, "reservationId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'user' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ReservationOrder.prototype, "userid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'menu' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], ReservationOrder.prototype, "menuId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], ReservationOrder.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ReservationOrder.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ReservationOrder.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ReservationOrder.prototype, "discount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], ReservationOrder.prototype, "totalPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], ReservationOrder.prototype, "createDate", void 0);
exports.ReservationOrder = ReservationOrder = __decorate([
    (0, mongoose_1.Schema)()
], ReservationOrder);
exports.ReservationOrderSchema = mongoose_1.SchemaFactory.createForClass(ReservationOrder);
//# sourceMappingURL=reservation_order.schema.js.map