import * as express from 'express';
import {GRPC_SERVER_ADDRESS} from '../config/config';
import GpsLogController from '../controllers/gpsLog.create';
import {TokenVerifier} from '../middleware/auth';
import {GpsServiceClient} from '../proto/gps_grpc_pb';
import {DeviceService} from '../services/device.service';
import * as grpc from '@grpc/grpc-js';

const router = express.Router();
const client = new GpsServiceClient(
  GRPC_SERVER_ADDRESS,
  grpc.credentials.createInsecure()
);

const gpsLogController = new GpsLogController(client);
const deviceService = new DeviceService();
const tokenVerifier = new TokenVerifier(deviceService);

router
  .route('/')
  .post(tokenVerifier.verifyToken.bind(tokenVerifier), (req, res) => {
    gpsLogController.createGpsLogHandler(req, res);
  });

export default router;
