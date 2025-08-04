import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateRegistroActividadeInput {
  @Field(() => ID)
  id: string;

  @Field()
  usuarioId: string;

  @Field()
  actividadId: string;
}
