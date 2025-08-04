export class CreateActividadeDto {
    id: number;

    nombre: string
    
    tipo: string; // Puede ser 'conferencia', 'taller', 'seminario', etc.

    descripcion: string;

    fechainicio: Date;

    fechafin: Date;
    
}
