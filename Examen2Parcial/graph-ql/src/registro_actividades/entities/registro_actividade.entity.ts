import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class RegistroActividade {
  @Field(() => ID)
  id: string;

  @Field()
  usuarioId: string;

  @Field()
  actividadId: string;
}
