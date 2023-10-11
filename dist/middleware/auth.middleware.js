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
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("../helper/jwt");
let AuthMiddleware = class AuthMiddleware {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    use(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(common_1.HttpStatus.UNAUTHORIZED).json({
                statusCode: 401,
                message: "Not Authorized",
                error: "Not Authorized",
            });
        }
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        this.jwtService.verify(token).then((decoded) => {
            req.body.authUser = decoded;
            next();
        }).catch((err) => {
            return res.status(common_1.HttpStatus.UNAUTHORIZED).json({
                statusCode: 401,
                message: "Not Authorized",
                error: "Not Authorized",
            });
        });
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map