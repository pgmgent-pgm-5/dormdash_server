import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Restaurant, restaurant => restaurant.category)
  @Field(type => [Restaurant], { nullable: true })
  restaurants?: Restaurant[];
}
