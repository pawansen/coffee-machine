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
exports.VenueSchema = exports.Venue = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Venue = class Venue {
};
exports.Venue = Venue;
__decorate([
    (0, mongoose_1.Prop)({ require: true }),
    __metadata("design:type", String)
], Venue.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: mongoose_2.SchemaTypes.ObjectId, ref: 'user' }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Venue.prototype, "userid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Venue.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Venue.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true }),
    __metadata("design:type", String)
], Venue.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ require: true }),
    __metadata("design:type", String)
], Venue.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], Venue.prototype, "floorPlanImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 1 }),
    __metadata("design:type", Number)
], Venue.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    __metadata("design:type", Date)
], Venue.prototype, "createDate", void 0);
exports.Venue = Venue = __decorate([
    (0, mongoose_1.Schema)()
], Venue);
exports.VenueSchema = mongoose_1.SchemaFactory.createForClass(Venue);
//# sourceMappingURL=venue.schema.js.map