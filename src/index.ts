require('dotenv').config();
import * as express from 'express';
import gpsLogRouter from './routes/gpsLogRouter';
import deviceRouter from './routes/deviceRouter';
import {GRPC_SERVER_PORT} from './config/config';
import Logger from './utils/logger';

export const app = express();

app.listen(GRPC_SERVER_PORT);
Logger.info(`Server running on port ${GRPC_SERVER_PORT}`);

app.use(express.json());
app.use('/api/gps-logs', gpsLogRouter);
app.use('/api/device', deviceRouter);
