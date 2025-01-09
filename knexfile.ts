import { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'userpassword',
      database: process.env.DB_NAME || 'mydb',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: '../migrations/',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: '../seeds',
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'userpassword',
      database: process.env.DB_NAME || 'mydb',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: '../migrations/',
      tableName: 'knex_migrations',
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || 'userpassword',
      database: process.env.DB_NAME || 'mydb',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: '../migrations/',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: '../seeds',
    }
  },
};

export default config;
