import {NextFunction, Request, Response} from 'express';
import * as grpc from '@grpc/grpc-js';
import {GpsData, GpsResponse} from '../proto/gps_pb';
import {GpsServiceClient} from '../proto/gps_grpc_pb';
import {GRPC_SERVER_ADDRESS} from '../config/config';
import Logger from '../utils/logger';

export class CreateLogInput {
  device_id: string;
  latitude: number;
  longitude: number;
}

class GpsLogController {
  async createGpsLogHandler(
    req: Request<{}, {}, CreateLogInput>,
    res: Response,
    next: NextFunction
  ): Promise<boolean> {
    Logger.info('GpsLogController createGpsLog');
    try {
      const response = await this.getGrpcData(req);
      res.status(201).json({
        status: 'success',
        data: {
          response,
        },
      });
    } catch (error: any) {
      Logger.error(`GpsLogController createGpsLog ${error}`);
      res.status(409).json({
        status: 'fail',
        message: error.message,
      });
      next(error);
    }
    return true;
  }
  getGrpcData(req: Request<{}, {}, CreateLogInput>): Promise<GpsResponse> {
    const client = new GpsServiceClient(
      GRPC_SERVER_ADDRESS,
      grpc.credentials.createInsecure()
    );
    const grpc_request = new GpsData();
    grpc_request.setDeviceId(req.body.device_id);
    grpc_request.setLatitude(req.body.latitude);
    grpc_request.setLongitude(req.body.longitude);
    return new Promise((resolve, reject) => {
      client.sendGpsData(grpc_request, (error, response) => {
        if (error) return reject(error);
        resolve(response);
      });
    });
  }
}

export default GpsLogController;
