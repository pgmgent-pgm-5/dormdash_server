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
  @IsString()
  // @IsJWT()
  @Field()
  password: string;

  @IsOptional()
  @IsMobilePhone('en-CA')
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

  @IsNotEmpty()
  @IsString()
  @Field({nullable: true})
  studentNumber: string;
}
