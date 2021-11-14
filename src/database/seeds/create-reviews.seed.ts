
import { Review } from "src/reviews/entities/review.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateReviews implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Review)().createMany(10);
  }
}