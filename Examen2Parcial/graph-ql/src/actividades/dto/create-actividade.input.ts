import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateActividadeInput {
  @Field(() => ID)
  id: string; // ID de la actividad, se generará automáticamente

  @Field()
  nombre: string;

  @Field()
  descripcion: string;

  @Field()
  fecha: Date;

  @Field()
  duracion: number;

  @Field()
  tipo: string;
}
