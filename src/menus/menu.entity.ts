import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { Restaurant } from "src/restaurants/entities/restaurant.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Menu {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  picture: string;

  @Column({ type: "float"}) // int or string --> not needed 
  @Field(type => Float)
  price: number;

  @Column()
  @Field(type => Int)
  quantity: number;

  @Column()
  @Field(type => Int)
  restaurantId: number;

  @ManyToOne(() => Restaurant, restaurant => restaurant.menus)
  @Field(type => Restaurant )
  restaurant: Restaurant;
}

// field{nullable: true} --> if it can be null