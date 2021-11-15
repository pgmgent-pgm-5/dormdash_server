import { CreateDishInput } from './create-dish.input';
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

@InputType()
export class UpdateDishInput extends CreateDishInput {
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @Field(type => Int)
  id: number;
}
