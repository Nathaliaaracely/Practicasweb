import { CreateRegistroActividadeInput } from './create-registro_actividade.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateRegistroActividadeInput extends PartialType(CreateRegistroActividadeInput) {
  @Field(() => ID)
  id: string;
}
