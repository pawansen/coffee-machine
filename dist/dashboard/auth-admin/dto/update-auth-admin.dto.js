"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthAdminDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_auth_admin_dto_1 = require("./create-auth-admin.dto");
class UpdateAuthAdminDto extends (0, mapped_types_1.PartialType)(create_auth_admin_dto_1.CreateAuthAdminDto) {
}
exports.UpdateAuthAdminDto = UpdateAuthAdminDto;
//# sourceMappingURL=update-auth-admin.dto.js.map