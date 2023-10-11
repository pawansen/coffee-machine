import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class GetItemCategoryDto {
    name?: string;
    _id?: { $ne: string };
}
