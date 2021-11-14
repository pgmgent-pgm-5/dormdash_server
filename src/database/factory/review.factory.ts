import { Review } from "src/reviews/entities/review.entity";
import * as Faker from 'faker';
import { define } from "typeorm-seeding";


define(Review, (faker: typeof Faker) => {
  const review = new Review();
  review.restaurantId = faker.random.number({min: 1, max: 15 });
  review.title = faker.lorem.sentence();
  review.rating = faker.random.number({min: 0, max:5});
  review.description = faker.lorem.paragraph();
  review.date = faker.date.past(1);
  return review;
})