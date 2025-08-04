import { IsString, IsNotEmpty } from 'class-validator';

export class CreateEntradaDto {
    @IsString()
    @IsNotEmpty()
    usuarioId: string;

    @IsString()
    @IsNotEmpty()
    tipo_entradaid: string;

    @IsString()
    @IsNotEmpty()
    eventoId: string;

    @IsString()
    @IsNotEmpty()
    pago: string;

    @IsString()
    @IsNotEmpty()
    fecha_adquirida: Date;
}
