import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';
import { Menu } from 'src/menus/menu.entity';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  constructor(private restaurantsService: RestaurantsService) {}

  @Mutation(() => Restaurant)
  createRestaurant(@Args('createRestaurantInput') createRestaurantInput: CreateRestaurantInput) {
    return this.restaurantsService.create(createRestaurantInput);
  }

  @Query(() => [Restaurant], { name: 'restaurants' })
  findAll() {
    return this.restaurantsService.findAll();
  }

  @Query(() => Restaurant, { name: 'restaurant' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.restaurantsService.findOne(id);
  }


  // @ResolveField(returns => [Menu])
  // menu(@Parent() restaurant: Restaurant): Promise<Menu[]> {
  //   return this.restaurantsService.getRestaurantsMenus(restaurant.id);
  // }

  @Mutation(() => Restaurant)
  updateRestaurant(@Args('updateRestaurantInput') updateRestaurantInput: UpdateRestaurantInput) {
    return this.restaurantsService.update(updateRestaurantInput.id, updateRestaurantInput);
  }

  @Mutation(() => Restaurant)
  removeRestaurant(@Args('id', { type: () => Int }) id: number) {
    return this.restaurantsService.remove(id);
  }
}
