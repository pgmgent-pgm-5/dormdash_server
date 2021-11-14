import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Category) private categoriesRepository: Repository<Category>){}

  create(createCategoryInput: CreateCategoryInput):Promise<Category> {
    const newCategory = this.categoriesRepository.create(createCategoryInput); 

    return this.categoriesRepository.save(newCategory);  // insert 
  }

  findAll():Promise<Category[]> {
    return this.categoriesRepository.find();
  }

  findOne(id: number):Promise<Category> {
    return this.categoriesRepository.findOneOrFail(id);
  }

  // findOneByRestaurant(id: number):Promise<Category> {
  //   return this.categoriesRepository.findOneOrFail({ restaurantId });
  // }

  async update(id: number, updateCategoryInput: UpdateCategoryInput):Promise<Category> {
    const updatedCategory = await this.categoriesRepository.preload({
      id: id,
      ...updateCategoryInput,
    });

    return this.categoriesRepository.save(updatedCategory);
  }

  async remove(id: number):Promise<Category> {
    const category = await this.findOne(id);
    return this.categoriesRepository.remove(category);
  }
}
