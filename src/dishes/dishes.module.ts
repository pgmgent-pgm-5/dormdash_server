import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesResolver } from './dishes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Dish])],
  providers: [DishesService, DishesResolver],
  exports: [DishesService]
})
export class DishesModule {}
