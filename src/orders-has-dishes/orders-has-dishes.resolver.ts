import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdersHasDishesService } from './orders-has-dishes.service';
import { OrdersHasDish } from './entities/orders-has-dish.entity';
import { CreateOrdersHasDishInput } from './dto/create-orders-has-dish.input';
import { UpdateOrdersHasDishInput } from './dto/update-orders-has-dish.input';

@Resolver(() => OrdersHasDish)
export class OrdersHasDishesResolver {
  constructor(private readonly ordersHasDishesService: OrdersHasDishesService) {}

  @Mutation(() => OrdersHasDish)
  createOrdersHasDish(@Args('createOrdersHasDishInput') createOrdersHasDishInput: CreateOrdersHasDishInput) {
    return this.ordersHasDishesService.create(createOrdersHasDishInput);
  }

  @Query(() => [OrdersHasDish], { name: 'ordersHasDishes' })
  findAll() {
    return this.ordersHasDishesService.findAll();
  }

  @Query(() => OrdersHasDish, { name: 'ordersHasDish' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ordersHasDishesService.findOne(id);
  }

  @Mutation(() => OrdersHasDish)
  updateOrdersHasDish(@Args('updateOrdersHasDishInput') updateOrdersHasDishInput: UpdateOrdersHasDishInput) {
    return this.ordersHasDishesService.update(updateOrdersHasDishInput.id, updateOrdersHasDishInput);
  }

  @Mutation(() => OrdersHasDish)
  removeOrdersHasDish(@Args('id', { type: () => Int }) id: number) {
    return this.ordersHasDishesService.remove(id);
  }
}
