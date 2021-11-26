import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { join } from 'path';
import { AppService } from './app.service';
import { DishesModule } from './dishes/dishes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { OrdersModule } from './orders/orders.module';
import { DriversModule } from './drivers/drivers.module';
import { AuthModule } from './auth/auth.module';

import * as dotenv from 'dotenv';
dotenv.config();
const nodeEnvironment = `${(
  process.env.NODE_ENV || 'development'
).toLowerCase()}`;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/env/${nodeEnvironment}.env`,
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/shema.gql'),
      //   playground: nodeEnvironment === 'development' ? true : false,
      playground: true,
      //   introspection: nodeEnvironment === 'development' ? true : false,
      introspection: true,
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
      sortSchema: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        seeds: [__dirname + '**/*.seed{.ts,.js}'],
        factories: [__dirname + '**/*.factory{.ts,.js}'],
        synchronize: true,
        logging: nodeEnvironment === 'development' ? true : false,
        dropSchema: nodeEnvironment === 'test' ? true : false,
        ssl: true,
      }),
    }),
    DishesModule,
    RestaurantsModule,
    ReviewsModule,
    CategoriesModule,
    UsersModule,
    PaymentsModule,
    OrdersModule,
    DriversModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
