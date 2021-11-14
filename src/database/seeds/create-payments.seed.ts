
import { Payment } from "src/payments/entities/payment.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreatePayments implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Payment)().createMany(15);
  }
}