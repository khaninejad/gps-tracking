import * as express from 'express';
import GpsLogController from '../controllers/gpsLog.create';
import {DeviceService} from '../services/device.service';
import {GpsLogService} from '../services/gpsLog.service';

const router = express.Router();
const deviceService = new DeviceService();
const gpsLogService = new GpsLogService(deviceService);

const gpsLogController = new GpsLogController(gpsLogService);

router
  .route('/')
  .post((req, res, next) =>
    gpsLogController.createGpsLogHandler(req, res, next)
  );

export default router;
