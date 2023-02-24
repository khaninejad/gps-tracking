import {NextFunction, Request, Response} from 'express';
import {GpsLogService} from '../services/gpsLog.service';

export class CreateLogInput {
  device_id: string;
  latitude: number;
  longitude: number;
}

class GpsLogController {
  constructor(private readonly gpsLogService: GpsLogService) {}

  async createGpsLogHandler(
    req: Request<{}, {}, CreateLogInput>,
    res: Response,
    next: NextFunction
  ): Promise<boolean> {
    try {
      const log = await this.gpsLogService.createLog(
        req.body,
        req.body.device_id
      );

      res.status(201).json({
        status: 'success',
        data: {
          log,
        },
      });
    } catch (err: any) {
      if (err.code === '23505') {
        res.status(409).json({
          status: 'fail',
          message: 'log already exist',
        });
      }
      next(err);
    }
    return true;
  }
}

export default GpsLogController;
