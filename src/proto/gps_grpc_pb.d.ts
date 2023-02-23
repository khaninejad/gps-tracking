// package: gps
// file: src/proto/gps.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as src_proto_gps_pb from "../../src/proto/gps_pb";

interface IGpsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendGpsData: IGpsServiceService_ISendGpsData;
}

interface IGpsServiceService_ISendGpsData extends grpc.MethodDefinition<src_proto_gps_pb.GpsData, src_proto_gps_pb.GpsResponse> {
    path: "/gps.GpsService/SendGpsData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_proto_gps_pb.GpsData>;
    requestDeserialize: grpc.deserialize<src_proto_gps_pb.GpsData>;
    responseSerialize: grpc.serialize<src_proto_gps_pb.GpsResponse>;
    responseDeserialize: grpc.deserialize<src_proto_gps_pb.GpsResponse>;
}

export const GpsServiceService: IGpsServiceService;

export interface IGpsServiceServer {
    sendGpsData: grpc.handleUnaryCall<src_proto_gps_pb.GpsData, src_proto_gps_pb.GpsResponse>;
}

export interface IGpsServiceClient {
    sendGpsData(request: src_proto_gps_pb.GpsData, callback: (error: grpc.ServiceError | null, response: src_proto_gps_pb.GpsResponse) => void): grpc.ClientUnaryCall;
    sendGpsData(request: src_proto_gps_pb.GpsData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_gps_pb.GpsResponse) => void): grpc.ClientUnaryCall;
    sendGpsData(request: src_proto_gps_pb.GpsData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_gps_pb.GpsResponse) => void): grpc.ClientUnaryCall;
}

export class GpsServiceClient extends grpc.Client implements IGpsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sendGpsData(request: src_proto_gps_pb.GpsData, callback: (error: grpc.ServiceError | null, response: src_proto_gps_pb.GpsResponse) => void): grpc.ClientUnaryCall;
    public sendGpsData(request: src_proto_gps_pb.GpsData, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_proto_gps_pb.GpsResponse) => void): grpc.ClientUnaryCall;
    public sendGpsData(request: src_proto_gps_pb.GpsData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_proto_gps_pb.GpsResponse) => void): grpc.ClientUnaryCall;
}
