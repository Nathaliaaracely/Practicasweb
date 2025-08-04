import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateActividadeDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsString()
    @IsNotEmpty()
    tipo: string; // Puede ser 'conferencia', 'taller', 'seminario', etc.

    @IsDate()
    @IsNotEmpty()
    fechainicio: Date;

    @IsDate()
    @IsNotEmpty()
    fechafin: Date;
}
