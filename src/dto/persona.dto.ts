import { IsString, IsNotEmpty, IsNumber, IsPositive, IsArray } from 'class-validator';

export class PersonaDto {

    @IsString()
    @IsNotEmpty()
    nombre: string = "";

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    edad: number = 0;

    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    hobbies: string[] = [];

}