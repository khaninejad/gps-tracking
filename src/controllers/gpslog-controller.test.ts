import {randomUUID} from 'crypto';
import {Request, Response} from 'express';
import GpsLogController, {CreateLogInput} from './gpslog-controller';
import {GpsResponse} from '../proto/gps_pb';
import {GRPC_SERVER_ADDRESS} from '../config/config';
import {GpsServiceClient} from '../proto/gps_grpc_pb';
import * as grpc from '@grpc/grpc-js';

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

  beforeEach(() => {
    const client = new GpsServiceClient(
      GRPC_SERVER_ADDRESS,
      grpc.credentials.createInsecure()
    );

    gpsLogController = new GpsLogController(client);
    req = {body: {latitude: 20, longitude: 30, device_id: randomUUID()}};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
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
