import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from './jwt';

@Injectable()

export class AuthGuard {
    constructor(private jwtService: JwtService) { }

    async verify(req: any) {
        console.log(req.authorization)
    }
}
