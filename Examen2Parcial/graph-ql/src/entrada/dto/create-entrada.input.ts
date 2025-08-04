import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateEntradaInput {
  @Field(() => ID)
  usuarioId: string;

  @Field(() => ID)
  tipo_entradaid: string; // Referencia al tipo de entrada (por ejemplo, 'general', 'VIP', etc.)

  @Field(() => ID)
  eventoId: string; // Referencia al evento al que se asocia la entrada

  @Field(() => Int)
  pago: number; // Monto pagado por la entrada

  @Field()
  fecha_adquirida: Date; // Fecha en que se adquirió la entrada
}
