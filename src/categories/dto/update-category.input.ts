import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsPositive, IsInt } from 'class-validator';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @Field()
  id: number;
}
