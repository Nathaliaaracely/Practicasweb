import { IsString, IsDate } from 'class-validator';

export class Pago {
    @IsString()
    id: string;

    @IsString()
    usuarioId: string;

    @IsString()
    metodoPago: string; // Puede ser 'efectivo', 'tarjeta', etc.

    @IsDate()
    fechaPago: Date; // Fecha en que se realizó el pago

    @IsString()
    monto: number;

    @IsString()
    estado: string; // Puede ser 'pendiente', 'completado', 'cancelado', etc.
}
