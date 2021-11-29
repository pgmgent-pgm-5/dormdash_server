import { Module } from '@nestjs/common';
import { OrdersHasDishesService } from './orders-has-dishes.service';
import { OrdersHasDishesResolver } from './orders-has-dishes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersHasDish } from './entities/orders-has-dish.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrdersHasDish]),
  ],
  providers: [OrdersHasDishesResolver, OrdersHasDishesService]
})
export class OrdersHasDishesModule {}
