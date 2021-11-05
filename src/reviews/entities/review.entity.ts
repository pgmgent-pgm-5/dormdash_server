import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Review {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field(type => Int)
  rating: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column({
    type: 'timestamp'
  })
  @Field()
  date: Date;

  @Column()
  @Field()
  restaurantId: number;  

  @ManyToOne(() => Restaurant, restaurant => restaurant.reviews)
  @Field(type => [Restaurant], { nullable: true })
  restaurant: Restaurant;
}
