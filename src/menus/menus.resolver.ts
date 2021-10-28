import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { CreateMenuInput } from './dto/create-menu.input';
import { Menu } from './menu.entity';
import { MenusService } from './menus.service';

@Resolver(of => Menu)
export class MenusResolver {
  constructor(private menuService: MenusService) {}

  @Query(returns => Menu)
  getMenu(@Args('id', {type: () => Int}) id:number): Promise<Menu> {
    return this.menuService.findOne(id);
  }

  @Query(returns => [Menu])
  menus(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @ResolveField(returns => Restaurant)
  restaurant(@Parent() menu: Menu): Promise<Restaurant> {
    return this.menuService.getRestaurant(menu.restaurantId);
  }

  @Mutation(returns => Menu)
  createMenu(@Args('createMenuInput') createMenuInput: CreateMenuInput): Promise<Menu> {
    return this.menuService.createMenu(createMenuInput);
  }

}
