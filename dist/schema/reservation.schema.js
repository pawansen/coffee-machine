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
exports.ReservationSchema = exports.Reservation = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Reservation = class Reservation {
};
exports.Reservation = Reservation;
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: mongoose_2.SchemaTypes.ObjectId, ref: 'user' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Reservation.prototype, "userid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Reservation.prototype, "startTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Reservation.prototype, "endTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        enum: ['Ongoing', 'Completed', 'Cancelled', 'Active', "Prepared"],
        default: 'Active',
    }),
    __metadata("design:type", String)
], Reservation.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['Cash', 'Online'], default: 'Cash' }),
    __metadata("design:type", String)
], Reservation.prototype, "paymentType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Reservation.prototype, "totalAmount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Reservation.prototype, "totalIteam", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Reservation.prototype, "createDate", void 0);
exports.Reservation = Reservation = __decorate([
    (0, mongoose_1.Schema)()
], Reservation);
exports.ReservationSchema = mongoose_1.SchemaFactory.createForClass(Reservation);
//# sourceMappingURL=reservation.schema.js.map