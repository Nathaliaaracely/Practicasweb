import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreatePagoInput {
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
