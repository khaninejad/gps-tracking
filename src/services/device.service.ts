import {AppDataSource} from '../config/datasource';
import {Device} from '../entities/device';

export class DeviceService {
  private deviceRepository = AppDataSource.getRepository(Device);

  async createDevice(input: Partial<Device>) {
    return await this.deviceRepository.save(
      this.deviceRepository.create({...input})
    );
  }

  async getDeviceById(deviceId: string) {
    return await this.deviceRepository.findOneOrFail({
      where: [
        {
          id: deviceId,
        },
      ],
    });
  }
  async checkDeviceToken(
    token: string
  ): Promise<boolean | PromiseLike<boolean>> {
    try {
      const res = await this.deviceRepository.findOneOrFail({
        where: [
          {
            token,
          },
        ],
      });
      if (res) return true;
      return false;
    } catch (error) {
      return false;
    }
  }
}
