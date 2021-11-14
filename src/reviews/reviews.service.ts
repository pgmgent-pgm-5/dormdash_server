import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review) private reviewsRepository: Repository<Review>){}

  create(createReviewInput: CreateReviewInput): Promise<Review> {
    const newReview = this.reviewsRepository.create(createReviewInput);
    return this.reviewsRepository.save(newReview);
  }

  findAll(): Promise<Review[]> {
    return this.reviewsRepository.find();
  }

  findAllByRestaurantId(restaurantId: number): Promise<Review[]> {
    return this.reviewsRepository.find({restaurantId});
  }

  findOne(id: number):Promise<Review> {
    return this.reviewsRepository.findOneOrFail(id);
  }

  async update(id: number, updateReviewInput: UpdateReviewInput):Promise<Review> {
    const updatedReview = await this.reviewsRepository.preload({
      id: id,
      ...updateReviewInput,
    })
    return this.reviewsRepository.save(updatedReview);
  }

  async remove(id: number) {
    const review = await this.findOne(id);
    return this.reviewsRepository.remove(review);
  }
}
