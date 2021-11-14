import { Driver } from "src/drivers/entities/driver.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateDrivers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Driver)().createMany(30);
  }
}