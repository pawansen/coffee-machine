import { Injectable } from '@nestjs/common';
import { sign, verify } from 'jsonwebtoken';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtService {
    constructor(private configService: ConfigService) { }

    async signPayload(payload: any) {
        let token = sign(payload, this.configService.get<string>('jwt_secret'), { expiresIn: this.configService.get<string>('jwt_expire_time') });
        return token;
    }

    async verify(token: string) {
        return verify(token, this.configService.get<string>('jwt_secret'));
    }

}