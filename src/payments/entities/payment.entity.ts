import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Order } from 'src/orders/entities/order.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Payment {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field(type => Int)
  userId: number;

  @Column()
  @Field(type => Int)
  orderId: number;

  @Column()
  @Field()
  paymentType: string;

  @Column()
  @Field()
  amount: string;

  @Column()
  @Field()
  paidDate: Date;

  @ManyToOne(() => User, user => user.payments)
  @Field(type => User)
  user: User;

  @OneToOne(() => Order, order => order.payment)
  @JoinColumn()
  order: Order;

}
