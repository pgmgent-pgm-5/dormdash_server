import { define, factory } from "typeorm-seeding";
import * as Faker from 'faker';
import { Restaurant } from "src/restaurants/entities/restaurant.entity";
import { User } from "src/users/entities/user.entity";

define(Restaurant, (faker: typeof Faker) => { 
  const restaurant = new Restaurant();
  restaurant.userId = factory(User)() as any;
  restaurant.categoryId = faker.random.number({min: 1, max: 5});
  restaurant.name = faker.company.companyName();
  restaurant.description = faker.lorem.paragraph();
  restaurant.logo = 'default_logo.png';
  restaurant.picture = 'default_restaurant.jpeg';
  restaurant.street = faker.address.streetName();
  restaurant.streetnumber = faker.random.number({min: 1, max: 60});
  restaurant.postalcode = faker.address.zipCode();
  restaurant.city = faker.address.city();
  restaurant.province = faker.address.state();
  restaurant.deliveryTimes = 'Monday 10:00 -23:00; Tuesday 10:00 -23:00; Wednesday 10:00 -23:00; Thursday 10:00 -23:00; Friday 10:00 -23:00; Saturday 10:00 -23:00; Sunday 10:00 -23:00' 
  restaurant.deliveryTime = faker.random.number({min: 5, max:30});
  
  return restaurant;
});