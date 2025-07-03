import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsInt, IsUUID } from 'class-validator';

@InputType()
export class CreateProductosDonacioneInput {
  @Field(() => String)
  @IsUUID()
  id: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  description: string;

  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  amount: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  date: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  donorId: string;
}