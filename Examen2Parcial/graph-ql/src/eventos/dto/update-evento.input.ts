import { CreateEventoInput } from './create-evento.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEventoInput extends PartialType(CreateEventoInput) {
  // El ID se manejará como un argumento separado en el resolver.
}
