import { JwtService } from './jwt';
export declare class AuthGuard {
    private jwtService;
    constructor(jwtService: JwtService);
    verify(req: any): Promise<void>;
}
