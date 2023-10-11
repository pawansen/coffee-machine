import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { TransformFnParams, Transform } from 'class-transformer';

export class CreateReservationDto {


    @IsNotEmpty()
    @IsString()
    @Transform(({ value }: TransformFnParams) => value?.trim())
    startTime: string;

}


export class CreateReservationOrderDto {

    @IsNotEmpty()
    menu: any;
}
