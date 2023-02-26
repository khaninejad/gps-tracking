import * as express from 'express';
import DeviceController from '../controllers/device-controller';
import {Services} from '../utils/services';

const router = express.Router();

const deviceController = new DeviceController(Services.deviceService);

router.route('/').post((req, res, next) => {
  deviceController.createDeviceHandler(req, res, next);
});

export default router;
