import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';
import { Repository } from 'typeorm';
import { CreateDishInput } from './dto/create-dish.input';
import { UpdateDishInput } from './dto/update-dish.input';
import { Dish } from './entities/dish.entity';

@Injectable()
export class DishesService {
  constructor(@InjectRepository(Dish) private dishesRepository: Repository<Dish>){}

  // constructor(@InjectRepository(Menu) private menusRepository: Repository<Menu>){}
  
  createDish(createDishInput: CreateDishInput): Promise<Dish> {
    const newDish = this.dishesRepository.create(createDishInput); // newMenu = new Menu(); new.name = input.name

    return this.dishesRepository.save(newDish);  // insert 
  }

  async findAll(): Promise<Dish[]> {
    return this.dishesRepository.find(); // SELECT * dish
  }

  findOne(id: number): Promise<Dish> {
    return this.dishesRepository.findOneOrFail(id);
  }

  findAllByRestaurant(restaurantId: number): Promise<Dish[]> {
    return this.dishesRepository.find({restaurantId});
  }

  // async getRestaurant(restaurantId: number):Promise<Restaurant> {
  //   console.log(restaurantId);
  //   const rest = await this.restaurantsService.findOne(restaurantId);
  //   console.log(rest);
  //   return this.restaurantsService.findOne(restaurantId);
  // }

  async update(id: number, updateDishInput: UpdateDishInput) {
    const updatedDish = await this.dishesRepository.preload({
      id: id,
      ...updateDishInput,
    });

    return this.dishesRepository.save(updatedDish);
  }

  async remove(id: number) {
    const dish = await this.findOne(id);
    return this.dishesRepository.remove(dish);
  }

}
