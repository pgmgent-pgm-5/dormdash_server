import { Field, InputType, Int, Float } from "@nestjs/graphql";
import { IsAlpha, IsAlphanumeric, IsInt, IsNotEmpty, IsNumber, IsPositive, Min, Max, IsString, IsCurrency } from "class-validator";

@InputType()
export class CreateMenuInput {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  restaurantId: number;

  @IsNotEmpty()
  @IsString()
  @Field()
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  description: string;

  @IsNotEmpty()
  @Field()
  picture: string;

  @IsNotEmpty()
  @IsPositive()
  @Min(0.5)
  @Max(1000)
  @IsNumber()
  // @IsCurrency()
  @Field(type => Float)
  price: number;
  
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  quantity: number;
}