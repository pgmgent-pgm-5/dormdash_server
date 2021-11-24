import { ConnectionOptions } from 'typeorm';

import * as dotenv from 'dotenv';
dotenv.config();
const nodeEnvironment = `${(
  process.env.NODE_ENV || 'development'
).toLowerCase()}`;

const typeormConfig: ConnectionOptions = {
  type: 'postgres',
  host: 'frankfurt-postgres.render.com',
  port: 5432,
  username: 'jamsy',
  password: 'cB2YbWjtHSlHqNeVqUQgNTck4ZmG4VdQ',
  database: 'dormdash',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: nodeEnvironment === 'development' ? true : false,
  dropSchema: nodeEnvironment === 'test' ? true : false,
  ssl: true,
};

// important to work with CLI.
module.exports = {
  ...typeormConfig,
  seeds: [__dirname + '/../database/**/*.seed{.ts,.js}'],
  factories: [__dirname + '/../database/**/*.factory{.ts,.js}'],
};
