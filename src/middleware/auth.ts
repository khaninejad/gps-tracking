import {NextFunction, Response, Request} from 'express';
import {DeviceService} from '../services/device.service';

export class TokenVerifier {
  constructor(private readonly deviceService: DeviceService) {}

  async verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).json({message: 'Unauthorized: Missing token'});
    }

    const isValidToken = await this.verifyTokenInternal(token);

    if (!isValidToken) {
      return res.status(401).json({message: 'Unauthorized: Invalid token'});
    }

    return next();
  }

  async verifyTokenInternal(token: string): Promise<boolean> {
    return await this.deviceService.checkDeviceToken(token);
  }
}
