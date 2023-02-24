import {AppDataSource} from '../config/datasource';
import {DeviceService} from './device.service';

jest.mock('../config/datasource', () => ({
  AppDataSource: {
    getRepository: jest.fn(),
  },
}));

describe('DeviceService', () => {
  let deviceService: DeviceService;
  let mockRepository: jest.Mocked<any>;

  beforeEach(() => {
    mockRepository = {
      create: jest.fn(),
      save: jest.fn(),
      findOneOrFail: jest.fn(),
    };
    (AppDataSource.getRepository as jest.Mock).mockReturnValue(mockRepository);

    deviceService = new DeviceService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createDevice', () => {
    it('should create a device and return it', async () => {
      const input = {name: 'test-device', description: 'Test device'};
      const device = {id: '123', ...input};

      mockRepository.create.mockReturnValue(device);
      mockRepository.save.mockResolvedValue(device);

      const result = await deviceService.createDevice(input);

      expect(mockRepository.create).toHaveBeenCalledWith(input);
      expect(mockRepository.save).toHaveBeenCalledWith(device);
      expect(result).toEqual(device);
    });
  });

  describe('getDeviceById', () => {
    it('should return the device with the specified id', async () => {
      const deviceId = '123';
      const device = {
        id: deviceId,
        name: 'test-device',
      };

      mockRepository.findOneOrFail.mockResolvedValue(device);

      const result = await deviceService.getDeviceById(deviceId);

      expect(mockRepository.findOneOrFail).toHaveBeenCalled();
      expect(result).toEqual(device);
    });

    it('should return null if device with specified id is not found', async () => {
      const deviceId = '123';

      mockRepository.findOneOrFail.mockResolvedValue(null);

      const result = await deviceService.getDeviceById(deviceId);

      expect(mockRepository.findOneOrFail).toHaveBeenCalled();
      expect(result).toBeNull();
    });
  });
});
