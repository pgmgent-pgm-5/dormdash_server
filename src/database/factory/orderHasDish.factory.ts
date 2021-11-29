
import * as Faker from 'faker';
import { Dish } from 'src/dishes/entities/dish.entity';
import { OrdersHasDish } from 'src/orders-has-dishes/entities/orders-has-dish.entity';
import { define } from "typeorm-seeding";


define(OrdersHasDish, (faker: typeof Faker) => {
  const orderHasDish = new OrdersHasDish();
  orderHasDish.orderId = faker.random.number({min: 1, max:100});
  orderHasDish.dishId = faker.random.number({min: 1, max:200});

  return orderHasDish;
})