import { CreateVenueDto } from './create-menu.dto';
declare const UpdateMenuDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVenueDto>>;
export declare class UpdateMenuDto extends UpdateMenuDto_base {
    name: string;
    categoryId: string;
    description: string;
    price: string;
    discount: string;
    venueId: string;
    code?: number;
}
export declare class UpdateStatusDto {
    id: any;
    status: number;
}
export {};
