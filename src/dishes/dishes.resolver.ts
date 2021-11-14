import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
// import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { CreateDishInput } from './dto/create-dish.input';
import { UpdateDishInput } from './dto/update-dish.input';
import { Dish } from './entities/dish.entity';
import { DishesService } from './dishes.service';

@Resolver(of => Dish)
export class DishesResolver {
  constructor(private dishesService: DishesService) {}

  @Query(returns => Dish)
  getDish(@Args('id', {type: () => Int}) id:number): Promise<Dish> {
    return this.dishesService.findOne(id);
  }

  @Query(returns => [Dish])
  dishes(): Promise<Dish[]> {
    return this.dishesService.findAll();
  }

  // @Query(returns => [Menu])
  // menusByRestaurant(@Args('restaurantId', {type: () => Int}) restaurantId: number): Promise<Menu[]> {
  //   return this.menusService.findAllByRestaurant(restaurantId);
  // }

  // @ResolveField(returns => Restaurant)
  // restaurant(@Parent() menu: Menu): Promise<Restaurant> {
  //   console.log("etessfsd")
  //   return this.menusService.getRestaurant(menu.restaurantId);
  // }

  @Mutation(returns => Dish)
  createDish(@Args('createDishInput') createDishInput: CreateDishInput): Promise<Dish> {
    return this.dishesService.createDish(createDishInput);
  }

  @Mutation(() => Dish)
  updateRestaurant(@Args('updateDishInput') updateDishInput: UpdateDishInput) {
    return this.dishesService.update(updateDishInput.id, updateDishInput);
  }

  @Mutation(() => Dish)
  removeDish(@Args('id', { type: () => Int }) id: number) {
    return this.dishesService.remove(id);
  }
}
