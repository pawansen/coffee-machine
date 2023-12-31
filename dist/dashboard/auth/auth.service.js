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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AuthService = class AuthService {
    constructor(VenueModel, UserModel) {
        this.VenueModel = VenueModel;
        this.UserModel = UserModel;
    }
    findOne(createAuthAdminDto) {
        return this.VenueModel.findOne({ email: createAuthAdminDto.email });
    }
    login(createAuthAdminDto) {
        return this.UserModel.findOne({ email: createAuthAdminDto.email });
    }
    findVenueDetails(id) {
        return this.VenueModel.findOne({ userid: id });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('venue')),
    __param(1, (0, mongoose_2.InjectModel)('user')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map