import { IsString,IsDate } from "class-validator";

export class Entrada {
    @IsString()
    id: string;

    @IsString()
    usuarioId: string;

    @IsString()
    tipo_entradaid: string;// Referencia al tipo de entrada (por ejemplo, 'general', 'VIP', etc.)

    eventoId: string; // Referencia al evento al que se asocia la entrada

    @IsString()
    pago: string; // Puede ser 'efectivo', 'tarjeta', etc.

    @IsDate()
    fecha_adquirida: Date;
}
