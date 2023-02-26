import {AppDataSource} from '../config/datasource';
import {GpsLog} from '../entities/gpsLog';
import {Services} from '../utils/services';
import {DeviceService} from './device-service';

export class GpsLogService {
  private gpsLogRepository = AppDataSource.getRepository(GpsLog);
  private deviceService: DeviceService;
  constructor() {
    this.deviceService = Services.deviceService;
  }

  async createLog(input: Partial<GpsLog>, device_id: string) {
    const device = await this.deviceService.getDeviceById(device_id);
    return await this.gpsLogRepository.save(
      this.gpsLogRepository.create({...input, device})
    );
  }

  async getLog(logId: string) {
    return await this.gpsLogRepository.findOneBy({id: logId});
  }
}
