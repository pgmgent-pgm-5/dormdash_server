import { CreateOrdersHasDishInput } from './create-orders-has-dish.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsPositive, IsInt } from 'class-validator';

@InputType()
export class UpdateOrdersHasDishInput extends PartialType(CreateOrdersHasDishInput) {
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @Field()
  id: number;
}
