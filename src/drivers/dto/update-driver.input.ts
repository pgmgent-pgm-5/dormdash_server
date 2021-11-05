import { CreateDriverInput } from './create-driver.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsPositive, IsInt } from 'class-validator';

@InputType()
export class UpdateDriverInput extends PartialType(CreateDriverInput) {
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @Field()
  id: number;
}
