import { define } from "typeorm-seeding";
import * as Faker from 'faker';
import { User } from "src/users/entities/user.entity";

const roles = ['student', 'restaurant', 'driver'];

define(User, (faker: typeof Faker) => { 
  const user = new User();
  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  user.email = faker.internet.email();
  user.password = "wachtwoord";
  user.phone = faker.phone.phoneNumber();
  user.picture = 'default_profile.jpeg';
  user.role = roles[faker.random.number({min: 0, max: 2})];
  return user;
});