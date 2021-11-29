import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsInt, IsNotEmpty, IsPositive, IsPostalCode, IsString } from 'class-validator';

@InputType()
export class CreateRestaurantInput {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  userId: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  categoryId: number;
  
  @IsNotEmpty()
  @IsString()
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  description: string;

  @IsNotEmpty()
  @Field()
  logo: string;

  @IsNotEmpty()
  @Field()
  picture: string;

  @IsNotEmpty()
  @Field()
  street: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  streetnumber: number;

  @IsNotEmpty()
  @IsPostalCode('CA')
  @Field()
  postalcode: string;

  @IsNotEmpty()
  @IsAlpha()
  @Field()
  city: string;

  @IsNotEmpty()
  @IsAlpha()
  @Field()
  province: string;

  @IsNotEmpty()
  @IsInt()
  @Field(type => Int)
  deliveryTime: number;

  @IsNotEmpty()
  @Field()
  deliveryTimes: string;
}
