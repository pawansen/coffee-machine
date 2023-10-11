/// <reference types="multer" />
import { I18nContext } from 'nestjs-i18n';
import { VenueService } from './venue.service';
import { ItemCategoryService } from '../item-category/item-category.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto, UpdateStatusDto } from './dto/update-venue.dto';
import { ConfigService } from "@nestjs/config";
export declare class VenueController {
    private readonly venueService;
    private readonly itemCategoryService;
    private configService;
    constructor(venueService: VenueService, itemCategoryService: ItemCategoryService, configService: ConfigService);
    addVenue(response: any, CreateVenueDto: CreateVenueDto, i18n: I18nContext, file: Express.Multer.File): any;
    getVenue(response: any, i18n: I18nContext): void;
    getVenueDetail(id: string, response: any, i18n: I18nContext): void;
    updateVenue(response: any, UpdateVenueDto: UpdateVenueDto, i18n: I18nContext, file: Express.Multer.File): any;
    updateStatus(UpdateStatusDto: UpdateStatusDto, response: any, i18n: I18nContext): any;
}
