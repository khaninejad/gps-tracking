// package: gps
// file: src/proto/gps.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GpsData extends jspb.Message { 
    getDeviceId(): string;
    setDeviceId(value: string): GpsData;

    getLatitude(): number;
    setLatitude(value: number): GpsData;

    getLongitude(): number;
    setLongitude(value: number): GpsData;

    getTimestamp(): number;
    setTimestamp(value: number): GpsData;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GpsData.AsObject;
    static toObject(includeInstance: boolean, msg: GpsData): GpsData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GpsData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GpsData;
    static deserializeBinaryFromReader(message: GpsData, reader: jspb.BinaryReader): GpsData;
}

export namespace GpsData {
    export type AsObject = {
        deviceId: string,
        latitude: number,
        longitude: number,
        timestamp: number,
    }
}

export class GpsResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): GpsResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GpsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GpsResponse): GpsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GpsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GpsResponse;
    static deserializeBinaryFromReader(message: GpsResponse, reader: jspb.BinaryReader): GpsResponse;
}

export namespace GpsResponse {
    export type AsObject = {
        message: string,
    }
}
