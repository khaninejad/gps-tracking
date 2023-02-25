import * as grpc from '@grpc/grpc-js';
import {GRPC_SERVER_ADDRESS, GRPC_SERVER_PORT} from '../config/config';
import {AppDataSource} from '../config/datasource';
import {GpsServiceService} from '../proto/gps_grpc_pb';
import Logger from '../utils/logger';
import {GpsService} from './send.data';

export class GrpcServer {
  private run = false;

  private server: grpc.Server;
  private url = '';

  constructor(server: grpc.Server, url: string) {
    this.server = server;
    this.server.addService(GpsServiceService, new GpsService());
    this.url = url;
  }

  async start(): Promise<void> {
    this.server.bindAsync(
      this.url,
      grpc.ServerCredentials.createInsecure(),
      () => {
        this.server.start();
      }
    );
    this.run = true;
  }
  stop() {
    this.server.forceShutdown();
    this.run = false;
  }
  isRunning(): boolean {
    return this.run;
  }
}

const server = new GrpcServer(new grpc.Server(), GRPC_SERVER_ADDRESS);
AppDataSource.initialize()
  .then(async () => {
    Logger.info('database initialized');
    server.start().then(() => Logger.info('GRPC Server is started'));
    Logger.info(`Server running on port ${GRPC_SERVER_PORT}`);
  })
  .catch(error => Logger.error(error));
