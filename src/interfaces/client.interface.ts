/* eslint-disable camelcase */

import {ServiceLoader} from '../utils/service_loader';
import {Client, ClientUnaryCall, requestCallback} from '@grpc/grpc-js';
import {gps} from '../proto/generated/client.grpc';
import IGpsData = gps.IGpsData;
import IGpsResponse = gps.IGpsResponse;

import * as path from 'path';
export interface ServiceConnectionOptions {
  url: string;
}

type ServiceClientFunction<T, M> = (
  arg: T,
  callback: requestCallback<M>
) => ClientUnaryCall;

export interface IGPSServiceClient extends Client {
  SendGpsData: ServiceClientFunction<IGpsData, IGpsResponse>;
}

export class GPSServiceClient {
  private readonly client: IGPSServiceClient;

  constructor(config: ServiceConnectionOptions) {
    this.client = ServiceLoader.load<IGPSServiceClient>({
      url: config.url,
      package: 'gps',
      service: 'GpsService',
      path: path.join(__dirname, '..', 'proto/gps.proto'),
    });
  }

  async sendGpsData(params: {
    device_id: string;
    latitude: number;
    longitude: number;
    timestamp: number;
  }): Promise<IGpsResponse | undefined> {
    return new Promise((resolve, reject) => {
      const request: IGpsData = {
        device_id: params.device_id,
        latitude: params.latitude,
        longitude: params.longitude,
        timestamp: params.timestamp,
      };
      this.client.SendGpsData(request, (error, response) => {
        if (error) reject(error);
        else resolve(response);
      });
    });
  }

  close() {
    this.client.close();
  }
}
