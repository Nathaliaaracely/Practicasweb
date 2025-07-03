import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

@ObjectType()
@Entity('transsaciones_pagos')
export class TranssacionesPago {
  @Field(() => ID, )
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string;

  @Field(() => String)
  @Column()
  @IsOptional()
  status: string;

  @Field(() => String)
  @Column()
  @IsNotEmpty()
  amount: string;

  @Field(() => String)
  @Column()
  transactionId: string;

}
