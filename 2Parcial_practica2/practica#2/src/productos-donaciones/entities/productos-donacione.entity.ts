import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('productos_donaciones')
export class ProductosDonacione {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => Int)
  @Column()
  amount: number;

  @Field(() => String)
  @Column()
  date: string;

  @Field(() => String)
  @Column()
  donorId: string;
}