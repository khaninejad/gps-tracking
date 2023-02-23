import * as $protobuf from "protobufjs";
/** Namespace gps. */
export namespace gps {

    /** Represents a GpsService */
    class GpsService extends $protobuf.rpc.Service {

        /**
         * Constructs a new GpsService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new GpsService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GpsService;

        /**
         * Calls SendGpsData.
         * @param request GpsData message or plain object
         * @param callback Node-style callback called with the error, if any, and GpsResponse
         */
        public sendGpsData(request: gps.IGpsData, callback: gps.GpsService.SendGpsDataCallback): void;

        /**
         * Calls SendGpsData.
         * @param request GpsData message or plain object
         * @returns Promise
         */
        public sendGpsData(request: gps.IGpsData): Promise<gps.GpsResponse>;
    }

    namespace GpsService {

        /**
         * Callback as used by {@link gps.GpsService#sendGpsData}.
         * @param error Error, if any
         * @param [response] GpsResponse
         */
        type SendGpsDataCallback = (error: (Error|null), response?: gps.GpsResponse) => void;
    }

    /** Properties of a GpsData. */
    interface IGpsData {

        /** GpsData device_id */
        device_id?: (string|null);

        /** GpsData latitude */
        latitude?: (number|null);

        /** GpsData longitude */
        longitude?: (number|null);

        /** GpsData timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a GpsData. */
    class GpsData implements IGpsData {

        /**
         * Constructs a new GpsData.
         * @param [properties] Properties to set
         */
        constructor(properties?: gps.IGpsData);

        /** GpsData device_id. */
        public device_id: string;

        /** GpsData latitude. */
        public latitude: number;

        /** GpsData longitude. */
        public longitude: number;

        /** GpsData timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new GpsData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GpsData instance
         */
        public static create(properties?: gps.IGpsData): gps.GpsData;

        /**
         * Encodes the specified GpsData message. Does not implicitly {@link gps.GpsData.verify|verify} messages.
         * @param message GpsData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gps.IGpsData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GpsData message, length delimited. Does not implicitly {@link gps.GpsData.verify|verify} messages.
         * @param message GpsData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gps.IGpsData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GpsData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GpsData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gps.GpsData;

        /**
         * Decodes a GpsData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GpsData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gps.GpsData;

        /**
         * Verifies a GpsData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GpsData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GpsData
         */
        public static fromObject(object: { [k: string]: any }): gps.GpsData;

        /**
         * Creates a plain object from a GpsData message. Also converts values to other types if specified.
         * @param message GpsData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gps.GpsData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GpsData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GpsResponse. */
    interface IGpsResponse {

        /** GpsResponse message */
        message?: (string|null);
    }

    /** Represents a GpsResponse. */
    class GpsResponse implements IGpsResponse {

        /**
         * Constructs a new GpsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: gps.IGpsResponse);

        /** GpsResponse message. */
        public message: string;

        /**
         * Creates a new GpsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GpsResponse instance
         */
        public static create(properties?: gps.IGpsResponse): gps.GpsResponse;

        /**
         * Encodes the specified GpsResponse message. Does not implicitly {@link gps.GpsResponse.verify|verify} messages.
         * @param message GpsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gps.IGpsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GpsResponse message, length delimited. Does not implicitly {@link gps.GpsResponse.verify|verify} messages.
         * @param message GpsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gps.IGpsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GpsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GpsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gps.GpsResponse;

        /**
         * Decodes a GpsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GpsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gps.GpsResponse;

        /**
         * Verifies a GpsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GpsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GpsResponse
         */
        public static fromObject(object: { [k: string]: any }): gps.GpsResponse;

        /**
         * Creates a plain object from a GpsResponse message. Also converts values to other types if specified.
         * @param message GpsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gps.GpsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GpsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
