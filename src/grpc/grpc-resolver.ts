/* eslint-disable @typescript-eslint/no-explicit-any */
import {GpsData, GpsResponse} from '../proto/gps_pb';
import * as grpc from '@grpc/grpc-js';
import {DeviceService} from '../services/device-service';
import {GpsLogService} from '../services/gpslog-service';
import Logger from '../utils/logger';

export class GpsService implements grpc.UntypedServiceImplementation {
  [name: string]: grpc.UntypedHandleCall;
  async sendGpsData(
    call: grpc.ServerUnaryCall<GpsData, GpsResponse>,
    callback: grpc.sendUnaryData<GpsResponse>
  ): Promise<void> {
    Logger.info('GpsService request');
    const response = new GpsResponse();
    try {
      const gpsLogService = new GpsLogService(new DeviceService());
      const req = call.request;
      const res = await gpsLogService.createLog(
        {latitude: req.getLatitude(), longitude: req.getLongitude()},
        req.getDeviceId()
      );
      response.setMessage(`${res.id} is created`);
      callback(null, response);
    } catch (error: any) {
      response.setMessage(error.message);
      Logger.error(error.message);
      callback(null, response);
    }
  }
}
