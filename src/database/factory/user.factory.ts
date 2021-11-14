import { define } from "typeorm-seeding";
import * as Faker from 'faker';
import { User } from "src/users/entities/user.entity";

const roles = ['student', 'admin', 'restaurant', 'driver'];

define(User, (faker: typeof Faker) => { 
  const user = new User();
  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  user.email = faker.internet.email();
  user.password = faker.random.word();
  user.phone = faker.phone.phoneNumber();
  user.picture = faker.image.avatar();
  user.role = roles[faker.random.number({min: 0, max: 3})];
  return user;
});