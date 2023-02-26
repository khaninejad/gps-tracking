import {randomUUID} from 'crypto';
import {Request, Response, NextFunction} from 'express';
import GpsLogController, {CreateLogInput} from './gpsLog.create';
import {GpsResponse} from '../proto/gps_pb';

jest.mock('../proto/gps_grpc_pb', () => {
  const client = {
    sendGpsData: jest.fn().mockResolvedValue({
      message: '56dd3e11-85fa-4de6-b968-095e47d5b965 is created',
    }),
  };
  return {
    GpsServiceClient: jest.fn(() => client),
  };
});

describe('GpsLogController', () => {
  let gpsLogController: GpsLogController;
  let req: Partial<Request<{}, {}, CreateLogInput>>;
  let res: Partial<Response>;
  let next: jest.MockedFunction<NextFunction>;

  beforeEach(() => {
    gpsLogController = new GpsLogController();
    req = {body: {latitude: 20, longitude: 30, device_id: randomUUID()}};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  describe('createLogHandler', () => {
    it('should create a log and return it in the response', async () => {
      const response = new GpsResponse();
      jest.spyOn(gpsLogController, 'getGrpcData').mockResolvedValue(response);
      await gpsLogController.createGpsLogHandler(
        req as Request,
        res as Response
      );
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        status: 'success',
        data: {response},
      });
    });

    it('should fail on create a log ', async () => {
      jest
        .spyOn(gpsLogController, 'getGrpcData')
        .mockRejectedValue(new Error());
      await gpsLogController.createGpsLogHandler(
        req as Request,
        res as Response
      );
      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({
        status: 'fail',
        message: '',
      });
    });
  });
});
