import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePagoDto {
    @IsString()
    @IsNotEmpty()
    usuarioId: string;

    @IsString()
    @IsNotEmpty()
    metodoPago: string;

    @IsString()
    @IsNotEmpty()
    fechaPago: Date;

    @IsString()
    @IsNotEmpty()
    monto: number;

    @IsString()
    @IsNotEmpty()
    estado: string;
}
