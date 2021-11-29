import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Dish } from 'src/dishes/entities/dish.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => Order, order => order.orderHasDish)
  @Field(type => [Order], { nullable: true})
  orders?: Order[];

  @OneToMany(() => Dish, dish => dish.orderHasDish)
  @Field(type => [Dish], { nullable: true})
  dishes?: Dish[];

}
