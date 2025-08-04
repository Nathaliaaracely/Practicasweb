export class CreateEntradaDto {
    id: string;

    usuarioId: string;

    tipo_entradaid: string; // Referencia al tipo de entrada (por ejemplo, 'general', 'VIP', etc.)

    eventoId: string; // Referencia al evento al que se asocia la entrada

    pago: string; // Puede ser 'efectivo', 'tarjeta', etc.

    fecha_adquirida: Date;
}
