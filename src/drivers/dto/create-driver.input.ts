import { InputType, Field } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateDriverInput {
  @IsNotEmpty()
  @IsBoolean()
  @Field()
  available: boolean;

}
