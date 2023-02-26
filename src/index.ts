import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import gpsLogRouter from './routes/gpslog-router';
import deviceRouter from './routes/device-router';
import {GRPC_SERVER_PORT} from './config/config';
import Logger from './utils/logger';
import {AppDataSource} from './config/datasource';

export const app = express();

app.use(express.json());
app.use('/api/gps-logs', gpsLogRouter);
app.use('/api/device', deviceRouter);

AppDataSource.initialize()
  .then(async () => {
    Logger.info('database initialized');
    app.listen(GRPC_SERVER_PORT);
    Logger.info(`Rest server running on port ${GRPC_SERVER_PORT}`);
  })
  .catch(error => Logger.error(error));
