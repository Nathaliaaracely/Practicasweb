import { IsString } from "class-validator";

export class Usuario {
    @IsString()
    id: string;

    @IsString()
    nombre: string;

    @IsString()
    apellido: string;

    @IsString()
    correo: string;

    @IsString()
    telefono: string;

    @IsString()
    tipo: string; // Puede ser 'administrador', 'usuario' u otro tipo definido
}
