import { CreateDonacioneInput } from './create-donacione.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateDonacioneInput extends PartialType(CreateDonacioneInput) {
  @Field(() => ID)
  id: string;
}
