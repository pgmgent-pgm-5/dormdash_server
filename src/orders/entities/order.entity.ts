import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Driver } from 'src/drivers/entities/driver.entity';
import { Menu } from 'src/menus/menu.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  orderNumber: number;

  @Column()
  @Field()
  orderState: string;

  @Column()
  @Field()
  deliveryState: string;

  @Column({ type: "float"})
  @Field(type => Float)
  deliveryFee: number;

  @Column({ type: "float"})
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

  @OneToOne(() => Driver, driver => driver.order)
  @JoinColumn()
  driver: Driver;

  @ManyToMany(() => Menu, menu => menu.orders)
  @JoinTable()
  menus: Menu[];
}
