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

  selectedDishes: [Dish];


}




// mutation insertArticleWithTags {
//   insert_article(
//     objects: [
//       {
//         title: "Article 1"
//         content: "Article 1 content"
//         author_id: 1
//         article_tags: {
//           data: [
//             {
//               tag: {
//                 data: { value: "Recipes" }
//                 on_conflict: {
//                   constraint: tag_value_key
//                   update_columns: [value]
//                 }
//               }
//             }
//             {
//               tag: {
//                 data: { value: "Cooking" }
//                 on_conflict: {
//                   constraint: tag_value_key
//                   update_columns: [value]
//                 }
//               }
//             }
//           ]
//         }
//       }
//     ]
//   ) {
//     returning {
//       title
//       article_tags {
//         tag {
//           value
//         }
//       }
//     }
//   }
// }