import {GpsData, GpsResponse} from '../proto/gps_pb';
import * as grpc from '@grpc/grpc-js';

export const sendGpsData = (
  call: grpc.ServerUnaryCall<GpsData, GpsResponse>,
  callback: grpc.sendUnaryData<GpsResponse>
): void => {
  const response = new GpsResponse();
  response.setMessage(`Hello ${new Date().toISOString()}`);
  callback(null, response);
};
