import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm/decorator/entity/Entity';

@ObjectType()
@Entity('donaciones')
export class Donacione {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(() => Int)
  @Column()
  amount: number;

  @Field()
  @Column()
  createdAt: Date;

}
