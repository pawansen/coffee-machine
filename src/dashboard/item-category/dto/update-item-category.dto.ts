import { PartialType } from '@nestjs/mapped-types';
import { CreateItemCategoryDto } from './create-item-category.dto';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class UpdateItemCategoryDto extends PartialType(CreateItemCategoryDto) {

    @IsNotEmpty()
    @IsString()
    name: string;
}


export class UpdateStatusCategoryDto {

    @IsNotEmpty()
    id: any;

    @IsNotEmpty()
    status: number;
}
