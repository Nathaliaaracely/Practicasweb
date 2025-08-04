import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Pago {
  @Field(() => ID)
  id: string;

  @Field()
  usuarioId: string;

  @Field()
  metodoPago: string;

  @Field()
  fechaPago: Date;

  @Field(() => Int)
  monto: number;

  @Field()
  estado: string;
}
