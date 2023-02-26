import {GpsData, GpsResponse} from '../proto/gps_pb';
import * as grpc from '@grpc/grpc-js';
import {GpsLogService} from '../services/gpslog-service';
import {GpsService} from './grpc-resolver';

jest.mock('../services/gpslog-service');

describe('GpsService', () => {
  const mockCallback = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('sendGpsData should create log and return success response', async () => {
    const req = new GpsData();
    req.setLatitude(1.23);
    req.setLongitude(4.56);
    req.setDeviceId('test-device-id');

    const mockCall = {
      request: req,
      metadata: new grpc.Metadata(),
      getPeer: jest.fn(),
      getDeadline: jest.fn(),
      getCredentials: jest.fn(),
      cancelled: jest.fn(),
      addListener: jest.fn(),
    } as unknown as grpc.ServerUnaryCall<GpsData, GpsResponse>;

    const mockResponse = new GpsResponse();
    mockResponse.setMessage('mock-log-id is created');

    const mockCreateLog = jest.fn().mockResolvedValue({
      id: 'mock-log-id',
    });
    (GpsLogService as jest.Mock).mockImplementation(() => ({
      createLog: mockCreateLog,
    }));

    await GpsService.prototype.sendGpsData(mockCall, mockCallback);

    expect(mockCreateLog).toHaveBeenCalledWith(
      {latitude: 1.23, longitude: 4.56},
      'test-device-id'
    );
    expect(mockCallback).toHaveBeenCalledWith(null, mockResponse);
  });
});
