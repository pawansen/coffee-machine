export declare class CreateVenueDto {
    name: string;
    location: string;
    email: string;
    password: string;
    description: string;
    floorPlanImage?: string;
    userid?: string;
}
export declare class CreateMenuDto {
    name: string;
    categoryId: string;
    description: string;
    price: string;
    discount: string;
    venueId: string;
    code: number;
}
export declare class GetMenuDto {
    pageNo: number;
    sizes: number;
}
