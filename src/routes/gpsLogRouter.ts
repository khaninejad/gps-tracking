import * as express from 'express';
import GpsLogController from '../controllers/gpsLog.create';

const router = express.Router();
const gpsLogController = new GpsLogController();

router
  .route('/')
  .post((req, res, next) =>
    gpsLogController.createGpsLogHandler(req, res, next)
  );

export default router;
