import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { join } from 'path';
import { AppService } from './app.service';
import { MenusModule } from './menus/menus.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ReviewsModule } from './reviews/reviews.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { OrdersModule } from './orders/orders.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/shema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: 'dormdash',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MenusModule,
    RestaurantsModule,
    ReviewsModule,
    CategoriesModule,
    UsersModule,
    PaymentsModule,
    OrdersModule,
    DriversModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
