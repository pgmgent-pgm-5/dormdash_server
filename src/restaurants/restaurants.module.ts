import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsResolver } from './restaurants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
// import { MenusModule } from '../menus/menus.module';

@Module({
  // imports: [TypeOrmModule.forFeature([Restaurant]), MenusModule],
  imports: [TypeOrmModule.forFeature([Restaurant])],
  providers: [RestaurantsResolver, RestaurantsService],
  exports: [RestaurantsService]
})
export class RestaurantsModule {}
