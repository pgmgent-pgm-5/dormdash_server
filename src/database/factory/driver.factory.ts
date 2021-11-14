import { define } from "typeorm-seeding";
import * as Faker from 'faker';
import { Driver } from "src/drivers/entities/driver.entity";


define(Driver, (faker: typeof Faker) => { 
  const driver = new Driver();
  driver.available = faker.random.boolean();
  return driver;
});