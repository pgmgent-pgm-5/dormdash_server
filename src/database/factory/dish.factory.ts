
import * as Faker from 'faker';
import { Dish } from 'src/dishes/entities/dish.entity';
import { define } from "typeorm-seeding";


define(Dish, (faker: typeof Faker) => {
  const dish = new Dish();
  dish.restaurantId = faker.random.number({min: 1, max:30});
  dish.name = faker.commerce.productName();
  dish.description = faker.lorem.paragraph();
  dish.picture = faker.image.food();
  dish.price = faker.random.number({min: 3, max:100, precision:0.01 });
  dish.quantity = faker.random.number({min: 1, max: 1000});

  return dish;
})