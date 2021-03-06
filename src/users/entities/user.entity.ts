import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Order } from 'src/orders/entities/order.entity';
import { Payment } from 'src/payments/entities/payment.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  password: string;

  @Column({nullable: true})
  @Field({nullable: true})
  phone?: string;

  @Column({nullable: true})
  @Field({nullable: true})
  picture?: string;

  @Column()
  @Field()
  role: string;

  @Column({nullable: true})
  @Field({nullable: true})
  studentNumber: string;

  @OneToMany(() => Payment, payment => payment.user)
  @Field(type => [Payment], { nullable: true })
  payments?: Payment[];

  @OneToMany(() => Order, order => order.user)
  @Field(type => [Order], { nullable: true })
  orders?: Order[];

  @OneToOne(() => Restaurant)
  restaurant: Restaurant;

  @BeforeInsert()
  async securePassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
