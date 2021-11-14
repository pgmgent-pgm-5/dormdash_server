import { define, factory } from "typeorm-seeding";
import * as Faker from 'faker';
import { Category } from "src/categories/entities/category.entity";

const categories = ['sushi', 'hamburgers', 'pizza', 'pita', 'pasta'];
let number = 0;

define(Category, (faker: typeof Faker) => { 
  const category = new Category();
  category.name = categories[number];
  number++;
  return category;
});
