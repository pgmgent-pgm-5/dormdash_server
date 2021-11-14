import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsResolver } from './restaurants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { DishesModule } from 'src/dishes/dishes.module';
import { DishesService } from 'src/dishes/dishes.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([Restaurant]), 
    DishesModule
  ],
  providers: [RestaurantsResolver, RestaurantsService],
})
export class RestaurantsModule {}
