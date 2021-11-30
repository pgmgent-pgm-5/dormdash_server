import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dish } from 'src/dishes/entities/dish.entity';
import { DishesService } from 'src/dishes/dishes.service';
import { Repository } from 'typeorm';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';
import { Restaurant } from './entities/restaurant.entity';
import { Category } from 'src/categories/entities/category.entity';
import { CategoriesService } from 'src/categories/categories.service';
import { ReviewsService } from 'src/reviews/reviews.service';
import { Review } from 'src/reviews/entities/review.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant) private restaurantsRepository: Repository<Restaurant>, 
    private dishesService: DishesService,
    private categoriesService: CategoriesService,
    private reviewsService: ReviewsService
  ) {}
  
  // constructor(@InjectRepository(Restaurant) private restaurantsRepository: Repository<Restaurant>){}
  
  create(createRestaurantInput: CreateRestaurantInput): Promise<Restaurant> {
    const newRestaurant = this.restaurantsRepository.create(createRestaurantInput);
    return this.restaurantsRepository.save(newRestaurant);
  }

  findAll() {
    return this.restaurantsRepository.find();
  }

  findAllByCategoryId(categoryId: number): Promise<Restaurant[]> {
    return this.restaurantsRepository.find({categoryId});
  }

  findAllByProvince(province: string): Promise<Restaurant[]> {
    return this.restaurantsRepository.find({province});
  }

  findAllByCategoryAndCity(categoryId: number, province: string): Promise<Restaurant[]> {
    return this.restaurantsRepository.find({province, categoryId});
  }

  findOne(id: number) {
    return this.restaurantsRepository.findOneOrFail(id);
  }

  findOneByUserId(userId: number) {
    return this.restaurantsRepository.findOneOrFail({userId});
  }


  getRestaurantsDishes(restaurantId: number): Promise<Dish[]> {
    return this.dishesService.findAllByRestaurant(restaurantId);
  }

  getRestaurantsReviews(restaurantId: number): Promise<Review[]> {
    return this.reviewsService.findAllByRestaurantId(restaurantId);
  }

  getRestaurantCategory(categoryId: number): Promise<Category> {
    return this.categoriesService.findOne(categoryId);
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
