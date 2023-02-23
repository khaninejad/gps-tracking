import * as grpc from '@grpc/grpc-js';
import {GRPC_SERVER_ADDRESS} from '../config/config';
import {GpsServiceService} from '../proto/gps_grpc_pb';
import {sendGpsData} from './send.data';

export class GrpcServer {
  private run = false;

  private server: grpc.Server;
  private url = '';

  constructor(server: grpc.Server, url: string) {
    this.server = server;
    this.server.addService(GpsServiceService, {sendGpsData});
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
server.start().then(() => console.log('Server is started'));
