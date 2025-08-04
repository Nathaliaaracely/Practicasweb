import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUsuarioInput {
  @Field(() => ID)
  id: string; // ID del usuario, se generará automáticamente

  @Field()
  nombre: string;

  @Field()
  apellido: string;
  
  @Field()
  correo: string;
  
  @Field()
  telefono: string;
  
  @Field()
  tipo: string;
}
