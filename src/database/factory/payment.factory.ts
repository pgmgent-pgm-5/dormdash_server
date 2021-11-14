import { define } from "typeorm-seeding";
import * as Faker from 'faker';
import { Payment } from "src/payments/entities/payment.entity";

const paymentTypes = ['Visa', 'Mastercard', 'Bancontact', 'PayPal'];

let i = 1;

define(Payment, (faker: typeof Faker) => { 
  const payment = new Payment();
  payment.userId = i;
  payment.orderId = i;
  payment.paymentType = paymentTypes[faker.random.number({min: 0, max:3})];
  payment.price = faker.random.number({min: 1, max: 1000, precision:0.01});
  payment.paidDate = faker.date.past(1);
  i++;
  return payment;
});