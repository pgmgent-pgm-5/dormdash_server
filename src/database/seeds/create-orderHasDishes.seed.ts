
import { OrdersHasDish } from "src/orders-has-dishes/entities/orders-has-dish.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateOrderHasDishes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(OrdersHasDish)().createMany(300);
  }
}