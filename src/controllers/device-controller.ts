import {NextFunction, Request, Response} from 'express';
import {DeviceService} from '../services/device-service';
import {CreateDeviceInput} from './device-controller-dtos';

class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  async createDeviceHandler(
    req: Request<{}, {}, CreateDeviceInput>,
    res: Response,
    next: NextFunction
  ): Promise<boolean> {
    try {
      const device = await this.deviceService.createDevice(req.body!);

      res.status(201).json({
        status: 'success',
        data: {
          device,
        },
      });
    } catch (err: any) {
      if (err.code === '23505') {
        res.status(409).json({
          status: 'fail',
          message: 'Device with that name already exist',
        });
      }
      next(err);
    }
    return true;
  }
}

export default DeviceController;
