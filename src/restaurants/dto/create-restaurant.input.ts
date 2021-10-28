import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantInput {
  @Field()
  name: string;

  @Field(type => Int)
  categoryId: number;

  @Field()
  description: string;

  @Field()
  logo: string;

  @Field()
  picture: string;

  @Field()
  street: string;

  @Field()
  streetnumber: number;

  @Field()
  postalcode: number;

  @Field()
  city: string;

  @Field()
  province: string;

  @Field()
  delivery_time: string;

  @Field()
  delivery_times: string;
}
