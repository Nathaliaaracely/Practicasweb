import { CreateActividadeInput } from './create-actividade.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateActividadeInput extends PartialType(CreateActividadeInput) {
  
}
