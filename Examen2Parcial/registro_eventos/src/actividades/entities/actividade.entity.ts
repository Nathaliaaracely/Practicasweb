import { IsString,IsDate } from "class-validator";

export class Actividade {
    @IsString()
    id: string;

    @IsString()
    nombre: string;

    @IsString()
    tipo: string; // Puede ser 'conferencia', 'taller', 'seminario', etc.

    @IsString()
    descripcion: string;

    @IsDate()
    fechaInicio: Date;

    @IsDate()
    fechaFin: Date;
}
