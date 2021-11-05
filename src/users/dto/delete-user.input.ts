import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsPositive, IsInt } from 'class-validator';

@InputType()
export class DeleteUserInput {
  @Field()
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  id: number;
}