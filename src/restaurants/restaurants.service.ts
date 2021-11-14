import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from 'src/dishes/entities/dish.entity';
import { DishesService } from 'src/dishes/dishes.service';
import { Repository } from 'typeorm';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';
import { Restaurant } from './entities/restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant) private restaurantsRepository: Repository<Restaurant>, 
    private dishesService: DishesService
  ) {}
  
  // constructor(@InjectRepository(Restaurant) private restaurantsRepository: Repository<Restaurant>){}
  
  create(createRestaurantInput: CreateRestaurantInput): Promise<Restaurant> {
    const newRestaurant = this.restaurantsRepository.create(createRestaurantInput);
    return this.restaurantsRepository.save(newRestaurant);
  }

  findAll() {
    return this.restaurantsRepository.find();
  }

  findOne(id: number) {
    return this.restaurantsRepository.findOneOrFail(id);
  }

  getRestaurantsDishes(restaurantId: number): Promise<Dish[]> {
    return this.dishesService.findAllByRestaurant(restaurantId);
  }

  async update(id: number, updateRestaurantInput: UpdateRestaurantInput) {
    const updatedRestaurant = await this.restaurantsRepository.preload({
      id: id,
      ...updateRestaurantInput,
    });

    return this.restaurantsRepository.save(updatedRestaurant);
  }

  async remove(id: number) {
    const restaurant = await this.findOne(id);
    return this.restaurantsRepository.remove(restaurant);
  }
}
