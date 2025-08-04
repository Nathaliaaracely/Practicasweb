import { IsString } from "class-validator";

export class RegistroActividade {
    @IsString()
    id: string;

    @IsString()
    usuarioId: string; // Referencia al usuario que realiza la actividad

    @IsString()
    actividadId: string; // Referencia a la actividad registrada
}
