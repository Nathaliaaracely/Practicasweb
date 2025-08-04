import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Entrada {
  @Field(() => ID)
  id: string;

  @Field()
  usuarioId: string;

  @Field()
  tipo_entradaid: string; // Referencia al tipo de entrada (por ejemplo, 'general', 'VIP', etc.)

  @Field()
  eventoId: string; // Referencia al evento al que se asocia la entrada

  @Field()
  pago: number;

  @Field()
  fecha_adquirida: Date;

}
