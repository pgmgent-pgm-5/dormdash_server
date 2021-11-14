import { define } from "typeorm-seeding";
import * as Faker from 'faker';
import { Order } from "src/orders/entities/order.entity";


let i = 1;
const orderStates = ['Preparing', 'Delivering', 'Completed'];
const deliveryStates = ['Waiting for pickup', 'Cancelled delivery', 'Completed delivery'];

define(Order, (faker: typeof Faker) => { 
  const order = new Order();
  order.userId = faker.random.number({min: 1, max: 100});
  order.driverId = faker.random.number({min: 1, max: 30});
  order.orderNumber = i;
  order.orderState = orderStates[faker.random.number({min: 0, max: 2})];
  order.deliveryState = deliveryStates[faker.random.number({min: 0, max:2 })];
  order.deliveryFee = faker.random.number({min: 1, max:100, precision:0.01 });
  order.totalPrice = faker.random.number({min: 1, max:1000, precision:0.01 });
  order.street = faker.address.streetName()
  order.streetnumber = faker.random.number({min: 1, max: 60});
  order.postalcode = faker.address.zipCode();
  order.city = faker.address.city();
  order.province = faker.address.state();
  i++;
  return order;
});