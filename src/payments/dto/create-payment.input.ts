import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { IsCurrency, IsDate, IsDateString, IsInt, IsNotEmpty, IsPositive, IsString, Max, Min } from 'class-validator';

@InputType()
export class CreatePaymentInput {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  userId: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  orderId: number;

  @IsNotEmpty()
  @IsString()
  @Field()
  payment_type: string;

  @IsNotEmpty()
  // @IsCurrency()
  @Min(0.5)
  @Max(999)
  @Field(type => Float)
  price: number;
 
  @IsNotEmpty()
  @IsDate()
  @Field(type => Date) 
  paidDate: Date;
}
