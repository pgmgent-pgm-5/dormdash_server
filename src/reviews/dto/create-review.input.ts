import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDate, IsDateString, IsInt, IsNotEmpty, IsPositive, Max, Min } from 'class-validator';

@InputType()
export class CreateReviewInput {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  restaurantId: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Min(0)
  @Max(5)
  @Field(type => Int)
  rating: number;

  @IsNotEmpty()
  @Field()
  title: string;

  @IsNotEmpty()
  @Field()
  description: string;

  @IsNotEmpty()
  // @IsDateString()
  @IsDate()
  @Field(type=> Date)
  date: Date;

}
