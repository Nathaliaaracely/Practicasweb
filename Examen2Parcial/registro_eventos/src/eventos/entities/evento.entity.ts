import { IsString, IsDate } from 'class-validator';

export class Evento {
    @IsString()
    id: string;

    @IsString()
    nombre: string;

    @IsString()
    descripcion: string;

    @IsDate()
    fechainicio: Date;
    
    @IsDate()
    fechafin: Date;
    
}
