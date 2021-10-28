import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Menu } from 'src/menus/menu.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

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
  @Field()
  streetnumber: number;

  @Column()
  @Field()
  postalcode: number;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  province: string;

  @Column()
  @Field()
  delivery_time: string;

  @Column()
  @Field()
  delivery_times: string;

  @OneToMany(() => Menu, menu => menu.restaurant)
  @Field(type => [Menu], { nullable: true})
  menus?: Menu[];
  
}
