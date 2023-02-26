import * as express from 'express';
import {GRPC_SERVER_ADDRESS} from '../config/config';
import GpsLogController from '../controllers/gpslog-controller';
import {TokenVerifier} from '../middleware/auth-middleware';
import {GpsServiceClient} from '../proto/gps_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import {Services} from '../utils/services';

const router = express.Router();
const client = new GpsServiceClient(
  GRPC_SERVER_ADDRESS,
  grpc.credentials.createInsecure()
);

const gpsLogController = new GpsLogController(client);
const tokenVerifier = new TokenVerifier(Services.deviceService);

router
  .route('/')
  .post(tokenVerifier.verifyToken.bind(tokenVerifier), (req, res) => {
    gpsLogController.createGpsLogHandler(req, res);
  });

export default router;
