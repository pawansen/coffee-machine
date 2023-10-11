import { ConfigService } from "@nestjs/config";
export declare class JwtService {
    private configService;
    constructor(configService: ConfigService);
    signPayload(payload: any): Promise<string>;
    verify(token: string): Promise<string | import("jsonwebtoken").JwtPayload>;
}
