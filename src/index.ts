require('dotenv').config();
import * as express from 'express';
import {AppDataSource} from './config/datasource';
import gpsLogRouter from './routes/gpsLogRouter';
import deviceRouter from './routes/deviceRouter';
import {GRPC_SERVER_PORT} from './config/config';

export const app = express();

AppDataSource.initialize()
  .then(async () => {
    console.log('database initialized');
    app.listen(GRPC_SERVER_PORT);
    console.log('Server running on port', GRPC_SERVER_PORT);
  })
  .catch(error => console.log(error));

app.use(express.json());
app.use('/api/gps-logs', gpsLogRouter);
app.use('/api/device', deviceRouter);
