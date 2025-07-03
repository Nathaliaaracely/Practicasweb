import { CreateTranssacionesPagoInput } from './create-transsaciones-pago.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateTranssacionesPagoInput extends PartialType(CreateTranssacionesPagoInput) {
  @Field(() => ID)
  id: string;
}
