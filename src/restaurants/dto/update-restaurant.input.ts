import { CreateRestaurantInput } from './create-restaurant.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateRestaurantInput {
  @Field()
  id: number;
  
  @Field()
  @IsOptional()
  name?: string;

  @Field(type => Int)
  @IsOptional()
  categoryId?: number;

  @Field()
  @IsOptional()
  description?: string;

  @Field()
  @IsOptional()
  logo?: string;

  @Field()
  @IsOptional()
  picture?: string;

  @Field()
  @IsOptional()
  street?: string;

  @Field()
  @IsOptional()
  streetnumber?: number;

  @Field()
  @IsOptional()
  postalcode?: number;

  @Field()
  @IsOptional()
  city?: string;

  @Field()
  @IsOptional()
  province?: string;

  @Field()
  @IsOptional()
  delivery_time?: string;

  @Field()
  @IsOptional()
  delivery_times?: string;
}
