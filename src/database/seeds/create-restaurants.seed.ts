import { Restaurant } from "src/restaurants/entities/restaurant.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateRestaurants implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Restaurant)().createMany(100);
  }
}