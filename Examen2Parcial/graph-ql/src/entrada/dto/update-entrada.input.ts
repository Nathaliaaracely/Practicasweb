import { CreateEntradaInput } from './create-entrada.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEntradaInput extends PartialType(CreateEntradaInput) {
  // El ID se manejará como un argumento separado en el resolver.
}
