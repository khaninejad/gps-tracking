import {Request, Response} from 'express';
import {GpsData, GpsResponse} from '../proto/gps_pb';
import {GpsServiceClient} from '../proto/gps_grpc_pb';
import Logger from '../utils/logger';

export class CreateLogInput {
  device_id: string;
  latitude: number;
  longitude: number;
}

class GpsLogController {
  constructor(private readonly client: GpsServiceClient) {}
  async createGpsLogHandler(
    req: Request<{}, {}, CreateLogInput>,
    res: Response
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
    }
    return true;
  }

  getGrpcData(req: Request<{}, {}, CreateLogInput>): Promise<GpsResponse> {
    const grpc_request = new GpsData();
    grpc_request.setDeviceId(req.body.device_id);
    grpc_request.setLatitude(req.body.latitude);
    grpc_request.setLongitude(req.body.longitude);
    return new Promise((resolve, reject) => {
      this.client.sendGpsData(grpc_request, (error, response) => {
        if (error) return reject(error);
        resolve(response);
      });
    });
  }
}

export default GpsLogController;
