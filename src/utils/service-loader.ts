/* eslint-disable @typescript-eslint/no-explicit-any */
import {loadSync} from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';

export class ServiceLoader {
  static load<T extends grpc.Client>(args: {
    path: string;
    package: string;
    service: string;
    url: string;
  }): T {
    const definition = loadSync(args.path, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });

    const service = (
      grpc.loadPackageDefinition(definition)[args.package] as any
    )[args.service];
    return new service(args.url, grpc.credentials.createInsecure(), {
      'grpc.keepalive_timeout_ms': 1500,
      'grpc.keepalive_permit_without_calls': 1,
    });
  }
}

export {grpc};
