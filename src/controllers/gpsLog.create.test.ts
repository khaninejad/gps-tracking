import {randomUUID} from 'crypto';
import {Request, Response, NextFunction} from 'express';
import {GpsLog} from '../entities/gpsLog';
import {DeviceService} from '../services/device.service';
import {GpsLogService} from '../services/gpsLog.service';
import GpsLogController, {CreateLogInput} from './gpsLog.create';

describe('GpsLogController', () => {
  let gpsLogService: GpsLogService;
  let gpsLogController: GpsLogController;
  let req: Partial<Request<{}, {}, CreateLogInput>>;
  let res: Partial<Response>;
  let next: jest.MockedFunction<NextFunction>;

  beforeEach(() => {
    const deviceService = new DeviceService();
    gpsLogService = new GpsLogService(deviceService);
    gpsLogController = new GpsLogController(gpsLogService);
    req = {body: {latitude: 20, longitude: 30, device_id: randomUUID()}};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  describe('createLogHandler', () => {
    it('should create a log and return it in the response', async () => {
      const gpsLog = new GpsLog();
      jest.spyOn(gpsLogService, 'createLog').mockResolvedValueOnce(gpsLog);

      await gpsLogController.createGpsLogHandler(
        req as Request,
        res as Response,
        next
      );

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        status: 'success',
        data: {log: gpsLog},
      });
    });

    it('should handle a duplicate log name error', async () => {
      const error = new Error(
        'duplicate key value violates unique constraint "log_name_key"'
      );
      (error as any).code = '23505';
      jest.spyOn(gpsLogService, 'createLog').mockRejectedValueOnce(error);

      await gpsLogController.createGpsLogHandler(
        req as Request,
        res as Response,
        next
      );

      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({
        status: 'fail',
        message: 'log already exist',
      });
    });

    it('should call next with any other error', async () => {
      const error = new Error('some other error');
      jest.spyOn(gpsLogService, 'createLog').mockRejectedValueOnce(error);

      await gpsLogController.createGpsLogHandler(
        req as Request,
        res as Response,
        next
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
