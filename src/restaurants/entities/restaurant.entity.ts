import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from 'src/categories/entities/category.entity';
import { Menu } from 'src/menus/menu.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field(type => Int)
  userId: number;

  @Column()
  @Field(type => Int)
  categoryId: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  logo: string;

  @Column()
  @Field()
  picture: string;

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

  @Column()
  @Field(type => Int)
  deliveryTime: number;

  @Column()
  @Field()
  deliveryTimes: string;

  @OneToMany(() => Menu, menu => menu.restaurant)
  @Field(type => [Menu], { nullable: true})
  menus?: Menu[];

  @OneToMany(() => Review, review => review.restaurant)
  @Field(type => [Review], { nullable: true})
  reviews?: Review[];

  @ManyToOne(() => Category, category => category.restaurants)
  @Field(type => Category)
  category: Category;

  @OneToOne(() => User, user => user.restaurant)
  @JoinColumn()
  user: User;
}
