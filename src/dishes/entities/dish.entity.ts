import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { OrdersHasDish } from "src/orders-has-dishes/entities/orders-has-dish.entity";
import { Order } from "src/orders/entities/order.entity";
import { Restaurant } from "src/restaurants/entities/restaurant.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Dish {
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

  @Column({ type: 'float'}) // type {type: 'float' } can also | int or string --> not needed 
  @Field(type => Float)
  price: number;

  @Column()
  @Field(type => Int)
  quantity: number;

  @Column()
  @Field(type => Int)
  restaurantId: number;

  @ManyToOne(() => Restaurant, restaurant => restaurant.dishes)
  @Field(type => Restaurant )
  restaurant: Restaurant;

  @ManyToOne(() => OrdersHasDish, orderHasDish => orderHasDish.dishes)
  @Field(type => OrdersHasDish )
  orderHasDish: OrdersHasDish;

  // @ManyToMany(() => Order, order => order.dishes)
  // orders: Order[];
}

// field{nullable: true} --> if it can be null