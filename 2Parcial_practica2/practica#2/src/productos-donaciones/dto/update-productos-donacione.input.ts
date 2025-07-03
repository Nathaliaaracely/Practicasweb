import { CreateProductosDonacioneInput } from './create-productos-donacione.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateProductosDonacioneInput extends PartialType(CreateProductosDonacioneInput) {
  @Field(() => ID)
  id: string;
}
