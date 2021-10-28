import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { RestaurantsService } from 'src/restaurants/restaurants.service';
import { Repository } from 'typeorm';
import { CreateMenuInput } from './dto/create-menu.input';
import { Menu } from './menu.entity';

@Injectable()
export class MenusService {
  constructor(@InjectRepository(Menu) private menusRepository: Repository<Menu>, private restaurantsService: RestaurantsService){}
  
  createMenu(createMenuInput: CreateMenuInput): Promise<Menu> {
    const newMenu = this.menusRepository.create(createMenuInput); // newMenu = new Menu(); new.name = input.name

    return this.menusRepository.save(newMenu);  // insert 
  }

  async findAll(): Promise<Menu[]> {
    // const menu = new Menu();
    // menu.id = 1;
    // menu.restaurant_id = 1;
    // menu.name = "Hamburger";
    // menu.description= "Delicious hamburger :p";
    // menu.picture = "https://burgerbites.be/wp-content/uploads/2020/03/Hamburger-rode-bietensaus-scaled.jpg";
    // menu.price = 3.50;
    // menu.quantity = 50;

    // return [menu];

    return this.menusRepository.find(); // SELECT * menu
  }

  findOne(id: number): Promise<Menu> {
    return this.menusRepository.findOneOrFail(id);
  }

  getRestaurant(restaurantId: number):Promise<Restaurant> {
    return this.restaurantsService.findOne(restaurantId);
  }

}
