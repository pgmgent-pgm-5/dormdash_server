import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { CreateMenuInput } from './dto/create-menu.input';
import { UpdateMenuInput } from './dto/update-menu.input';
import { Menu } from './menu.entity';
import { MenusService } from './menus.service';

@Resolver(of => Menu)
export class MenusResolver {
  constructor(private menusService: MenusService) {}

  @Query(returns => Menu)
  getMenu(@Args('id', {type: () => Int}) id:number): Promise<Menu> {
    return this.menusService.findOne(id);
  }

  @Query(returns => [Menu])
  menus(): Promise<Menu[]> {
    return this.menusService.findAll();
  }

  @Query(returns => [Menu])
  menusByRestaurant(@Args('restaurantId', {type: () => Int}) restaurantId: number): Promise<Menu[]> {
    return this.menusService.findAllByRestaurant(restaurantId);
  }

  // @ResolveField(returns => Restaurant)
  // restaurant(@Parent() menu: Menu): Promise<Restaurant> {
  //   return this.menusService.getRestaurant(menu.restaurantId);
  // }

  @Mutation(returns => Menu)
  createMenu(@Args('createMenuInput') createMenuInput: CreateMenuInput): Promise<Menu> {
    return this.menusService.createMenu(createMenuInput);
  }

  @Mutation(() => Menu)
  updateRestaurant(@Args('updateMenuInput') updateMenuInput: UpdateMenuInput) {
    return this.menusService.update(updateMenuInput.id, updateMenuInput);
  }

  @Mutation(() => Menu)
  removeMenu(@Args('id', { type: () => Int }) id: number) {
    return this.menusService.remove(id);
  }
}
