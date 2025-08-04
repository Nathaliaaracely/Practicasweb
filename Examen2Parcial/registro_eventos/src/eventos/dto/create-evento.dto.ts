import { IsString, IsDate } from 'class-validator';

export class CreateEventoDto {
    @IsString()
    nombre: string;

    @IsString()
    descripcion: string;

    @IsDate()
    fechainicio: Date;

    @IsDate()
    fechafin: Date;
}
