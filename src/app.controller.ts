import { Get, Controller, Render, Res } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    @Render('index')
    roots() {
        return { message: 'COMING SOON' };
    }
}