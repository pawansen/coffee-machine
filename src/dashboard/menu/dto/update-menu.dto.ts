import { PartialType } from '@nestjs/mapped-types';
import { CreateVenueDto } from './create-menu.dto';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { TransformFnParams, Transform } from 'class-transformer';

export class UpdateMenuDto extends PartialType(CreateVenueDto) {

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    name: string;

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    categoryId: string;

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    description: string;

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    price: string;

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    discount: string;

    @IsNotEmpty()
    @IsString()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    venueId: string;

    code?: number;
}


export class UpdateStatusDto {

    @IsNotEmpty()
    id: any;

    @IsNotEmpty()
    status: number;
}
