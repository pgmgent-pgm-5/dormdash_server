import { CreateMenuInput } from './create-menu.input';
import { InputType, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

@InputType()
export class UpdateMenuInput extends CreateMenuInput {
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @Field()
  id: number;
}
