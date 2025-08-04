import { CreateUsuarioInput } from './create-usuario.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUsuarioInput extends PartialType(CreateUsuarioInput) {
  // El ID se manejará como un argumento separado en el resolver.
}
