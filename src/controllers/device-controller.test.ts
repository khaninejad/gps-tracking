import {Request, Response, NextFunction} from 'express';
import {Device} from '../entities/device';
import {DeviceService} from '../services/device-service';
import DeviceController from './device-controller';
import {CreateDeviceInput} from './device-controller-dtos';

describe('DeviceController', () => {
  let deviceService: DeviceService;
  let deviceController: DeviceController;
  let req: Partial<Request<{}, {}, CreateDeviceInput>>;
  let res: Partial<Response>;
  let next: jest.MockedFunction<NextFunction>;

  beforeEach(() => {
    deviceService = new DeviceService();
    deviceController = new DeviceController(deviceService);
    req = {body: {name: 'testDevice', token: 'testToken'}};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  describe('createDeviceHandler', () => {
    it('should create a device and return it in the response', async () => {
      const device = new Device();
      jest.spyOn(deviceService, 'createDevice').mockResolvedValueOnce(device);

      await deviceController.createDeviceHandler(
        req as Request,
        res as Response,
        next
      );

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        status: 'success',
        data: {device: device},
      });
    });

    it('should handle a duplicate device name error', async () => {
      const error = new Error(
        'duplicate key value violates unique constraint "devices_name_key"'
      );
      (error as any).code = '23505';
      jest.spyOn(deviceService, 'createDevice').mockRejectedValueOnce(error);

      await deviceController.createDeviceHandler(
        req as Request,
        res as Response,
        next
      );

      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({
        status: 'fail',
        message: 'Device with that name already exist',
      });
    });

    it('should call next with any other error', async () => {
      const error = new Error('some other error');
      jest.spyOn(deviceService, 'createDevice').mockRejectedValueOnce(error);

      await deviceController.createDeviceHandler(
        req as Request,
        res as Response,
        next
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
