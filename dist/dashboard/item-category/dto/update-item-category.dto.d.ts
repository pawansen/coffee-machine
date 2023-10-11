import { CreateItemCategoryDto } from './create-item-category.dto';
declare const UpdateItemCategoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateItemCategoryDto>>;
export declare class UpdateItemCategoryDto extends UpdateItemCategoryDto_base {
    name: string;
}
export declare class UpdateStatusCategoryDto {
    id: any;
    status: number;
}
export {};
