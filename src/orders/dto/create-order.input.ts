import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsCurrency, IsDecimal, IsInt, IsNotEmpty, IsNumber, IsPositive, IsPostalCode, IsString, Max, Min } from 'class-validator';
import { type } from 'os';
import { Dish } from 'src/dishes/entities/dish.entity';

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
  @Field(type => Int)
  driverId: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
  restaurantId: number;
  
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
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
  @Max(999)
  @Field()
  deliveryFee: number;

  @IsNotEmpty()
  @IsNumber()
  // @IsCurrency()
  @IsPositive()
  @Min(0.5)
  @Max(999)
  @Field()
  totalPrice: number;

  @IsNotEmpty()
  @Field()
  street: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(type => Int)
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
