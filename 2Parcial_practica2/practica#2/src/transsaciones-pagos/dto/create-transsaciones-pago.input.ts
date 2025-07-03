import { InputType, Field, ID } from '@nestjs/graphql';
import {  IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateTranssacionesPagoInput {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  @IsString()
  id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  @IsString()
  @IsOptional()
  status: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  @IsString()
  amount: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  @IsString()
  transactionId: string;
}
