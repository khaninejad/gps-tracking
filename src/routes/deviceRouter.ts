import * as express from 'express';
import DeviceController from '../controllers/device.create';
import {TokenVerifier} from '../middleware/auth';
import {DeviceService} from '../services/device.service';

const router = express.Router();
const deviceService = new DeviceService();

const deviceController = new DeviceController(deviceService);

const tokenVerifier = new TokenVerifier(deviceService);

router
  .route('/')
  .post(tokenVerifier.verifyToken.bind(tokenVerifier), (req, res, next) => {
    deviceController.createDeviceHandler(req, res, next);
  });

export default router;
