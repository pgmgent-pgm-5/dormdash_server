import { Field, InputType, Int, Float } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class CreateMenuInput {
  @Field(type => Int)
  restaurantId: number;

  @IsAlpha()
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  picture: string;

  @Field(type => Float)
  price: number;
  
  @Field(type => Int)
  quantity: number;
}