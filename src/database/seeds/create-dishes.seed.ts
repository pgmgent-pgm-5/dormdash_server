import { Dish } from "src/dishes/entities/dish.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateDishes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Dish)().createMany(30);
  }
}