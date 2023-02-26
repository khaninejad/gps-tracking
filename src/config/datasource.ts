import {DataSource} from 'typeorm';
import {Device} from '../entities/device';
import {GpsLog} from '../entities/gpsLog';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_ADDRESS || '0.0.0.0',
  port: 5432,
  username: process.env.DB_USERNAME || 'gps',
  password: process.env.DB_PASSWORD || 'gps',
  database: process.env.DB_DATABASE || 'gps',
  synchronize: process.env.NODE_ENV !== 'production' ? true : false,
  logging: process.env.NODE_ENV !== 'production' ? true : false,
  entities: [Device, GpsLog],
  subscribers: [],
  migrations: [],
});
