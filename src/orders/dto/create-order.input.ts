import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsCurrency, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsPositive, IsPostalCode, IsString, Max, Min } from 'class-validator';

@InputType()
export class CreateOrderInput {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  userId: number;
  
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field()
  orderNumber: number;

  @IsNotEmpty()
  @IsString()
  @Field()
  orderState: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  deliveryState: string;

  @IsNotEmpty()
  @IsNumber()
  // @IsCurrency() -> only on strings
  @IsPositive()
  @Min(0.5)
  @Max(1000)
  @Field()
  deliveryFee: number;

  @IsNotEmpty()
  @IsNumber()
  // @IsCurrency()
  @IsPositive()
  @Min(0.5)
  @Max(10000)
  @Field()
  totalPrice: number;

  @IsNotEmpty()
  @Field()
  street: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field()
  streetnumber: number;

  @IsNotEmpty()
  @IsPostalCode('CA')
  @Field()
  postalcode: string;

  @IsNotEmpty()
  @IsAlpha()
  @Field()
  city: string;

  @IsNotEmpty()
  @IsAlpha()
  @Field()
  province: string;
}
