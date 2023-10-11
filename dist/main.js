"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const class_validator_1 = require("class-validator");
const app_module_1 = require("./app.module");
require("dotenv/config");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        allowedHeaders: '*',
        origin: '*',
        credentials: true,
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '../public'), {
        prefix: '/public/',
    });
    app.setBaseViewsDir((0, path_1.join)(__dirname, '../views'));
    app.setViewEngine('hbs');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
    }));
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    await app.listen(configService.get('port'));
    console.log('EL running on ' + configService.get('port'));
}
bootstrap();
//# sourceMappingURL=main.js.map