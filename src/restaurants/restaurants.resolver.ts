import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './entities/restaurant.entity';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';
import { Dish } from 'src/dishes/entities/dish.entity';
import { Repository } from 'typeorm';
import { DishesService } from 'src/dishes/dishes.service';
import { Category } from 'src/categories/entities/category.entity';
import { Review } from 'src/reviews/entities/review.entity';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  constructor(
    private restaurantsService: RestaurantsService,  
    ) {}

  @Mutation(() => Restaurant)
  createRestaurant(@Args('createRestaurantInput') createRestaurantInput: CreateRestaurantInput) {
    return this.restaurantsService.create(createRestaurantInput);
  }

  @Query(() => [Restaurant], { name: 'restaurants' })
  findAll() {
    return this.restaurantsService.findAll();
  }

  @Query(() => [Restaurant], { name: 'restaurantsByCategoryAndCity' })
  findAllByCategoryAndCity(@Args('categoryId', { type: () => Int }) categoryId: number, @Args('city', {type: () => String}) city: string) {
    return this.restaurantsService.findAllByCategoryAndCity(categoryId, city);
  }


  @Query(() => [Restaurant], { name: 'restaurantsByCategoryAndCity' })
  findAllByCity(@Args('city', {type: () => String}) city: string) {
    return this.restaurantsService.findAllByCity(city);
  }

  @Query(() => Restaurant)
  getRestaurantById(@Args('id', { type: () => Int }) id: number) {
    console.log(id);
    return this.restaurantsService.findOne(id);
  }

  @ResolveField(returns => [Dish])
  dishes(@Parent() restaurant: Restaurant): Promise<Dish[]> {
    console.log(restaurant);
    return this.restaurantsService.getRestaurantsDishes(restaurant.id);
  }

  @ResolveField(returns => [Review])
  reviews(@Parent() restaurant: Restaurant): Promise<Review[]> {
    return this.restaurantsService.getRestaurantsReviews(restaurant.id);
  }

  @ResolveField(returns => Category)
  category(@Parent() restaurant: Restaurant): Promise<Category> {
    console.log(restaurant);
    return this.restaurantsService.getRestaurantCategory(restaurant.categoryId);
  }
  

  @Mutation(() => Restaurant)
  updateRestaurant(@Args('updateRestaurantInput') updateRestaurantInput: UpdateRestaurantInput) {
    return this.restaurantsService.update(updateRestaurantInput.id, updateRestaurantInput);
  }

  @Mutation(() => Restaurant)
  removeRestaurant(@Args('id', { type: () => Int }) id: number) {
    return this.restaurantsService.remove(id);
  }
}
