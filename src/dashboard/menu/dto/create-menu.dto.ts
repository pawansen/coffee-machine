import { IsNotEmpty, IsEmail, IsString, MaxLength } from 'class-validator';
import { TransformFnParams, Transform } from 'class-transformer';
export class CreateVenueDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  name: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  location: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  email: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  password: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  description: string;

  floorPlanImage?: string;
}

export class CreateMenuDto {
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


  code: number;

  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  quantity: number;
}


export class GetMenuDto {
  pageNo: number;
  sizes: number;
}