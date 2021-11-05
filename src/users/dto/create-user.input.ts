import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsEmail, IsInt, IsJWT, IsMobilePhone, IsNotEmpty, IsOptional, IsPositive, isString, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {

  @IsNotEmpty()
  @IsAlpha()
  @Field()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @IsJWT()
  @Field()
  password: string;

  @IsOptional()
  @IsMobilePhone()
  @Field({nullable: true})
  phone?: string;

  @IsOptional()
  @IsString()
  @Field({nullable: true})
  picture?: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  role: string;

}
