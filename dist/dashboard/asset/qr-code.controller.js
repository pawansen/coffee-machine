"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrCodeService = void 0;
const common_1 = require("@nestjs/common");
const qrcode = require("qrcode");
let QrCodeService = class QrCodeService {
    async generateQrCode(data) {
        try {
            const qrCodeDataURL = await qrcode.toDataURL(data);
            return qrCodeDataURL;
        }
        catch (error) {
            throw new Error('Failed to generate QR code.');
        }
    }
};
exports.QrCodeService = QrCodeService;
exports.QrCodeService = QrCodeService = __decorate([
    (0, common_1.Injectable)()
], QrCodeService);
//# sourceMappingURL=qr-code.controller.js.map