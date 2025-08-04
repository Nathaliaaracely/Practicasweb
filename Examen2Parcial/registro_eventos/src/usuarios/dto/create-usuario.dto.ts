import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido: string;

    @IsEmail()
    @IsNotEmpty()
    correo: string;



    @IsString()
    @IsNotEmpty()
    telefono: string;

    @IsString()
    @IsNotEmpty()
    tipo: string;

}
