import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsResolver } from './restaurants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { DishesModule } from 'src/dishes/dishes.module';
import { DishesService } from 'src/dishes/dishes.service';
import { CategoriesModule } from 'src/categories/categories.module';
import { ReviewsModule } from 'src/reviews/reviews.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Restaurant]), 
    DishesModule,
    CategoriesModule,
    ReviewsModule
  ],
  providers: [RestaurantsResolver, RestaurantsService],
})
export class RestaurantsModule {}
