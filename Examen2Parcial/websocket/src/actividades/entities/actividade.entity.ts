import {IsString,IsDateString  }from "class-validator";

export class Actividade {
    
    @IsString()
    id: number;

    @IsString()
    nombre: string;

    @IsString()
    tipo: string; // Puede ser 'conferencia', 'taller', 'seminario', etc.

    @IsString()
    descripcion: string;

    @IsDateString()
    fechainicio: Date;

    @IsDateString()
    fechafin: Date;
}
