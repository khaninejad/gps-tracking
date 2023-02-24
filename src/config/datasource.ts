import {DataSource} from 'typeorm';
import {Device} from '../entities/device';
import {GpsLog} from '../entities/gpsLog';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_ADDRESS || '0.0.0.0',
  port: 5432,
  username: process.env.DB_USERNAME || 'listing',
  password: process.env.DB_PASSWORD || 'listing',
  database: process.env.DB_DATABASE || 'listing',
  synchronize: true,
  logging: true,
  entities: [Device, GpsLog],
  subscribers: [],
  migrations: [],
});
