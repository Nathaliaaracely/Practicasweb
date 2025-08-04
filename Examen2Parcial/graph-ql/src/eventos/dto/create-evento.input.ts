import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateEventoInput {
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
