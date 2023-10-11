import { I18nContext } from 'nestjs-i18n';
import { AssetService } from './asset.service';
import { QrCodeService } from './qr-code.controller';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto, UpdateStatusDto } from './dto/update-asset.dto';
import { ConfigService } from '@nestjs/config';
export declare class AssetController {
    private readonly assetService;
    private readonly qrCodeService;
    private readonly configService;
    constructor(assetService: AssetService, qrCodeService: QrCodeService, configService: ConfigService);
    create(response: any, createAssetDto: CreateAssetDto, i18n: I18nContext): any;
    findAll(response: any, i18n: I18nContext, filter: {
        pageNo: number;
        size: number;
    }): void;
    findDetails(id: string, response: any, body: any, i18n: I18nContext): void;
    update(id: string, updateAssetDto: UpdateAssetDto, response: any, i18n: I18nContext): any;
    updateStatus(UpdateStatusDto: UpdateStatusDto, response: any, i18n: I18nContext): any;
}
