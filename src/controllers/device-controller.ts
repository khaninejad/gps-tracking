/* eslint-disable @typescript-eslint/no-explicit-any */
import {NextFunction, Request, Response} from 'express';
import {DeviceService} from '../services/device-service';
import {CreateDeviceInput} from './device-controller-dtos';
import {createDeviceInputSchema} from './device-controller-validator';

class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  async createDeviceHandler(
    req: Request<{}, {}, CreateDeviceInput>,
    res: Response,
    next: NextFunction
  ): Promise<boolean> {
    try {
      const {error, value} = createDeviceInputSchema.validate(req.body);
      if (error) {
        throw error;
      }

      const device = await this.deviceService.createDevice(value);

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
