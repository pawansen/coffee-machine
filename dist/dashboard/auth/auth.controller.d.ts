import { I18nContext } from 'nestjs-i18n';
import { AuthService } from './auth.service';
import { CreateAuthAdminDto } from './dto/create-auth-admin.dto';
import { HashService } from '../../helper/hash';
import { JwtService } from '../../helper/jwt';
import { ConfigService } from "@nestjs/config";
export declare class AuthController {
    private readonly authAdminService;
    private hashService;
    private jwt;
    private configService;
    constructor(authAdminService: AuthService, hashService: HashService, jwt: JwtService, configService: ConfigService);
    Login(createAuthAdminDto: CreateAuthAdminDto, response: any, i18n: I18nContext): any;
}
