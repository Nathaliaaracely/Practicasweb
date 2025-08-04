import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Usuario {
  @Field(() => ID)
  id: string;

  @Field()
  nombre: string;

  @Field()
  apellido: string;

  @Field()
  correo: string;

  @Field()
  telefono: string;

  @Field()
  tipo: string; // Puede ser 'administrador', 'usuario' u otro tipo definido
}
