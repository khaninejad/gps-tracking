import * as grpc from '@grpc/grpc-js';
import {GRPC_SERVER_ADDRESS} from '../config/config';
import {GrpcServer} from './grpc-server';

jest.mock('@grpc/grpc-js');
jest.mock('../config/datasource', () => ({
  AppDataSource: {
    initialize: jest.fn().mockResolvedValue(undefined),
    getRepository: jest.fn(),
  },
}));

describe('GrpcServer', () => {
  let server: GrpcServer;
  let grpcServer: jest.Mocked<grpc.Server>;

  beforeEach(async () => {
    grpcServer = new grpc.Server() as jest.Mocked<grpc.Server>;
    server = new GrpcServer(grpcServer, GRPC_SERVER_ADDRESS);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should start and stop the server', async () => {
    const startSpy = jest.spyOn(grpcServer, 'start');
    const bindAsyncMock = jest.fn((addr, creds, cb) => {
      cb();
    });
    grpcServer.bindAsync.mockImplementationOnce(bindAsyncMock);

    await server.start();

    expect(bindAsyncMock).toHaveBeenCalledWith(
      GRPC_SERVER_ADDRESS,
      grpc.ServerCredentials.createInsecure(),
      expect.any(Function)
    );
    expect(startSpy).toHaveBeenCalledTimes(1);
    expect(server.isRunning()).toBe(true);

    server.stop();

    expect(server.isRunning()).toBe(false);
  });
});
