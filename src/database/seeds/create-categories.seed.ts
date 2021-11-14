
import { Category } from "src/categories/entities/category.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateCategories implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Category)().createMany(5);
  }
}

/**
 * Order seeding 
 * yarn seed: run -s CreateUsers
 * 1) Users
 * 2) Categories
 * 3) Restaurants
 * 4) Dishes
 * 5) Reviews
 * 6) Drivers
 * 7) Orders
 * 8) Payments
 */