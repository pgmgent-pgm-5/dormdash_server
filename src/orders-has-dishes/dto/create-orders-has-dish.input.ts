import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsInt, IsPositive } from 'class-validator';

@InputType()
export class CreateOrdersHasDishInput {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  orderId: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  dishId: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  quantity: number; 
}
