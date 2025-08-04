import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Evento {
  @Field(() => ID)
  id: string;

  @Field()
  nombre: string;

  @Field()
  descripcion: string;

  @Field()
  fechainicio: Date;

  @Field()
  fechafin: Date;
}
