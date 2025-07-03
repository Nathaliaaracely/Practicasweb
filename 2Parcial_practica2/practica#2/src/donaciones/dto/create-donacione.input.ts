import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsInt, IsUUID } from 'class-validator';

@InputType()
export class CreateDonacioneInput {
  @Field(() => ID)
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
