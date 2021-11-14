import { ConnectionOptions } from 'typeorm';

import * as dotenv from 'dotenv';
dotenv.config();
const nodeEnvironment = `${(process.env.NODE_ENV || 'development').toLowerCase()}`;

const typeormConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'jamsy',
  password: 'jamsy',
  database: 'sybrendeboever',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: nodeEnvironment === 'development' ? true : false,
  dropSchema: nodeEnvironment === 'test' ? true : false,
};

// important to work with CLI.
module.exports = {
  ...typeormConfig,
  seeds: [__dirname + '/../database/**/*.seed{.ts,.js}'],
  factories: [__dirname + '/../database/**/*.factory{.ts,.js}'],
};