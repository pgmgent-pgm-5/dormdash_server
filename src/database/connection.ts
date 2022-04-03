import { ConnectionOptions } from 'typeorm';

import * as dotenv from 'dotenv';
dotenv.config();
const nodeEnvironment = `${(
  process.env.NODE_ENV || 'development'
).toLowerCase()}`;

// const typeormConfig: ConnectionOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'jamsy',
//   password: 'jamsy',
//   database: 'dormdash',
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   synchronize: true,
//   logging: nodeEnvironment === 'development' ? true : false,
//   dropSchema: nodeEnvironment === 'test' ? true : false,
// };

const typeormConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'ec2-176-34-211-0.eu-west-1.compute.amazonaws.com',
  port: 5432,
  username: 'kgxdduiaxdbszz',
  password: 'e876c9082f8aa24bceec14f96c4123337476ea9b2e9032e3713f219a4426064c',
  database: 'deq0nh04fturto',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: nodeEnvironment === 'development' ? true : false,
  dropSchema: nodeEnvironment === 'test' ? true : false,
  // ssl: true,
  ssl: { rejectUnauthorized: false }
};

// important to work with CLI
module.exports = {
  ...typeormConfig,
  seeds: [__dirname + '/../database/**/*.seed{.ts,.js}'],
  factories: [__dirname + '/../database/**/*.factory{.ts,.js}'],
};
