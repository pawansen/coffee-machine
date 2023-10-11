import { Injectable, NestMiddleware, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '../helper/jwt'

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(private jwtService: JwtService) { }

    use(req: Request, res: Response, next: NextFunction) {

        if (!req.headers.authorization) {
            return res.status(HttpStatus.UNAUTHORIZED).json({
                statusCode: 401,
                message: "Not Authorized",
                error: "Not Authorized",
            });
        }
        const authHeader: string = req.headers.authorization;
        const token: string = authHeader.split(" ")[1];
        this.jwtService.verify(token).then((decoded) => {
            req.body.authUser = decoded;
            next();
        }).catch((err) => {
            return res.status(HttpStatus.UNAUTHORIZED).json({
                statusCode: 401,
                message: "Not Authorized",
                error: "Not Authorized",
            });
        })
    }
}
