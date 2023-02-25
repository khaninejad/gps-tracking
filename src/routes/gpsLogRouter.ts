import * as express from 'express';
import GpsLogController from '../controllers/gpsLog.create';
import {TokenVerifier} from '../middleware/auth';
import {DeviceService} from '../services/device.service';

const router = express.Router();
const gpsLogController = new GpsLogController();
const deviceService = new DeviceService();
const tokenVerifier = new TokenVerifier(deviceService);

router
  .route('/')
  .post(tokenVerifier.verifyToken.bind(tokenVerifier), (req, res, next) => {
    gpsLogController.createGpsLogHandler(req, res, next);
  });

export default router;
