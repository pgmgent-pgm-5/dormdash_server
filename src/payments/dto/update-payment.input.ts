import { CreatePaymentInput } from './create-payment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsPositive, IsInt } from 'class-validator';

@InputType()
export class UpdatePaymentInput extends PartialType(CreatePaymentInput) {
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @Field()
  id: number;
}
