import { CreateVenueDto } from './create-venue.dto';
declare const UpdateVenueDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVenueDto>>;
export declare class UpdateVenueDto extends UpdateVenueDto_base {
    name: string;
    location: string;
    email: string;
    password: string;
    description: string;
    floorPlanImage?: string;
    id: string;
}
export declare class UpdateStatusDto {
    id: any;
    status: number;
}
export {};
