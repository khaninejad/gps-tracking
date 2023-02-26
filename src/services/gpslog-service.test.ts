/* eslint-disable @typescript-eslint/no-explicit-any */
import {AppDataSource} from '../config/datasource';
import {DeviceService} from './device-service';
import {GpsLogService} from './gpslog-service';

jest.mock('./device-service');
const device = {id: '1', name: 'Device 1', token: 'abc123'};

describe('GpsLogService', () => {
  let gpsLogService: GpsLogService;
  let deviceService: DeviceService;
  let gpsLogRepository: any;

  beforeEach(() => {
    gpsLogRepository = {
      save: jest.fn().mockReturnValue({
        id: 'log-123',
        latitude: 10.1234,
        longitude: 20.5678,
        device,
      }),
      create: jest.fn(),
      findOneBy: jest.fn(),
    };
    AppDataSource.getRepository = jest.fn().mockReturnValue(gpsLogRepository);
    deviceService = new DeviceService();
    gpsLogService = new GpsLogService();
  });

  describe('createLog', () => {
    it('should create a GPS log with the given device ID', async () => {
      const input = {latitude: 10.1234, longitude: 20.5678};

      (deviceService.getDeviceById as jest.Mock).mockResolvedValue(device);

      const result = await gpsLogService.createLog(input, device.id);

      expect(result).toHaveProperty('id');
      expect(result.latitude).toBe(input.latitude);
      expect(result.longitude).toBe(input.longitude);
      expect(result.device).toBe(device);
    });
  });
});
