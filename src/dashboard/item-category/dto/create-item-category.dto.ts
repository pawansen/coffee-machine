import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateItemCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
