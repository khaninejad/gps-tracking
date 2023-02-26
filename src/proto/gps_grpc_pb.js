// GENERATED CODE -- DO NOT EDIT!

'use strict';
const grpc = require('@grpc/grpc-js');
const src_proto_gps_pb = require('../../src/proto/gps_pb.js');

function serialize_gps_GpsData(arg) {
  if (!(arg instanceof src_proto_gps_pb.GpsData)) {
    throw new Error('Expected argument of type gps.GpsData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gps_GpsData(buffer_arg) {
  return src_proto_gps_pb.GpsData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_gps_GpsResponse(arg) {
  if (!(arg instanceof src_proto_gps_pb.GpsResponse)) {
    throw new Error('Expected argument of type gps.GpsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_gps_GpsResponse(buffer_arg) {
  return src_proto_gps_pb.GpsResponse.deserializeBinary(
    new Uint8Array(buffer_arg)
  );
}

const GpsServiceService = (exports.GpsServiceService = {
  sendGpsData: {
    path: '/gps.GpsService/SendGpsData',
    requestStream: false,
    responseStream: false,
    requestType: src_proto_gps_pb.GpsData,
    responseType: src_proto_gps_pb.GpsResponse,
    requestSerialize: serialize_gps_GpsData,
    requestDeserialize: deserialize_gps_GpsData,
    responseSerialize: serialize_gps_GpsResponse,
    responseDeserialize: deserialize_gps_GpsResponse,
  },
});

exports.GpsServiceClient = grpc.makeGenericClientConstructor(GpsServiceService);
