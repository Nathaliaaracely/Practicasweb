import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Actividade {
  @Field(() => ID)
  id: string;

  @Field()
  nombre: string;

  @Field()
  tipo: string; // Puede ser 'conferencia', 'taller', 'seminario', etc.

  @Field()
  descripcion: string;

  @Field()
  fechaInicio: Date;

  @Field()
  fechaFin: Date;

}
