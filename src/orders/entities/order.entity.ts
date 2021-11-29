import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Driver } from 'src/drivers/entities/driver.entity';
import { Dish } from 'src/dishes/entities/dish.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrdersHasDish } from 'src/orders-has-dishes/entities/orders-has-dish.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';

@Entity()
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field(type => Int)
  userId: number;

  @Column()
  @Field(type => Int)
  driverId: number;

  @Column()
  @Field(type => Int)
  restaurantId: number;

  @Column()
  @Field(type => Int)
  orderNumber: number;

  @Column()
  @Field()
  orderState: string;

  @Column()
  @Field()
  deliveryState: string;

  @Column({type: 'decimal', precision: 5, scale:2, default: 0})
  @Field(type => Float)
  deliveryFee: number;

  @Column({type: 'decimal', precision: 5, scale:2, default: 0})
  @Field(type => Float)
  totalPrice: number;

  @Column()
  @Field()
  street: string;

  @Column()
  @Field(type => Int)
  streetnumber: number;

  @Column()
  @Field()
  postalcode: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  province: string;

  @OneToOne(() => Payment, payment => payment.order)
  payment: Payment;

  @ManyToOne(() => User, user => user.orders)
  @Field(type => User)
  user: User;

  @OneToMany(() => Driver, driver => driver.order)
  @Field(type => [Driver])
  drivers: Driver[];

  @OneToOne(() => Restaurant, restaurant => restaurant.order)
  @JoinColumn()
  restaurant: Restaurant;

  @ManyToOne(() => OrdersHasDish, orderHasDish => orderHasDish.orders)
  @Field(type => OrdersHasDish)
  orderHasDish: OrdersHasDish;


  // @ManyToMany(
  //   () => Dish, 
  //   (dish: Dish) => dish.orders,
  //   { eager: true },
  // )
  // @JoinTable({
  //   name: 'orders_has_dishes',
  //   joinColumn: {
  //     name: 'order_id',
  //     referencedColumnName: 'id' 
  //   },
  //   inverseJoinColumn: {
  //     name: 'dish_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // @Field(() => [Dish])
  // dishes: Dish[];
}
