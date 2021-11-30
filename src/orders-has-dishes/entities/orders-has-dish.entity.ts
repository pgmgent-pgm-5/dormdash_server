import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Dish } from 'src/dishes/entities/dish.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class OrdersHasDish {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field(type => Int)
  orderId: number;

  @Column()
  @Field(type => Int)
  dishId: number;  

  @ManyToOne(() => Order, order => order.orderHasDishes)
  @Field(type => Order)
  order: Order;

  @ManyToOne(() => Dish, dish => dish.orderHasDishes)
  @Field(type => Dish)
  dish: Dish;

}
