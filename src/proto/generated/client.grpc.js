/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict';

var $protobuf = require('protobufjs/minimal');

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {});

$root.gps = (function () {
  /**
   * Namespace gps.
   * @exports gps
   * @namespace
   */
  var gps = {};

  gps.GpsService = (function () {
    /**
     * Constructs a new GpsService service.
     * @memberof gps
     * @classdesc Represents a GpsService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function GpsService(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(
        this,
        rpcImpl,
        requestDelimited,
        responseDelimited
      );
    }

    (GpsService.prototype = Object.create(
      $protobuf.rpc.Service.prototype
    )).constructor = GpsService;

    /**
     * Creates new GpsService service using the specified rpc implementation.
     * @function create
     * @memberof gps.GpsService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {GpsService} RPC service. Useful where requests and/or responses are streamed.
     */
    GpsService.create = function create(
      rpcImpl,
      requestDelimited,
      responseDelimited
    ) {
      return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link gps.GpsService#sendGpsData}.
     * @memberof gps.GpsService
     * @typedef SendGpsDataCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {gps.GpsResponse} [response] GpsResponse
     */

    /**
     * Calls SendGpsData.
     * @function sendGpsData
     * @memberof gps.GpsService
     * @instance
     * @param {gps.IGpsData} request GpsData message or plain object
     * @param {gps.GpsService.SendGpsDataCallback} callback Node-style callback called with the error, if any, and GpsResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (GpsService.prototype.sendGpsData = function sendGpsData(
        request,
        callback
      ) {
        return this.rpcCall(
          sendGpsData,
          $root.gps.GpsData,
          $root.gps.GpsResponse,
          request,
          callback
        );
      }),
      'name',
      {value: 'SendGpsData'}
    );

    /**
     * Calls SendGpsData.
     * @function sendGpsData
     * @memberof gps.GpsService
     * @instance
     * @param {gps.IGpsData} request GpsData message or plain object
     * @returns {Promise<gps.GpsResponse>} Promise
     * @variation 2
     */

    return GpsService;
  })();

  gps.GpsData = (function () {
    /**
     * Properties of a GpsData.
     * @memberof gps
     * @interface IGpsData
     * @property {string|null} [device_id] GpsData device_id
     * @property {number|null} [latitude] GpsData latitude
     * @property {number|null} [longitude] GpsData longitude
     * @property {number|Long|null} [timestamp] GpsData timestamp
     */

    /**
     * Constructs a new GpsData.
     * @memberof gps
     * @classdesc Represents a GpsData.
     * @implements IGpsData
     * @constructor
     * @param {gps.IGpsData=} [properties] Properties to set
     */
    function GpsData(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GpsData device_id.
     * @member {string} device_id
     * @memberof gps.GpsData
     * @instance
     */
    GpsData.prototype.device_id = '';

    /**
     * GpsData latitude.
     * @member {number} latitude
     * @memberof gps.GpsData
     * @instance
     */
    GpsData.prototype.latitude = 0;

    /**
     * GpsData longitude.
     * @member {number} longitude
     * @memberof gps.GpsData
     * @instance
     */
    GpsData.prototype.longitude = 0;

    /**
     * GpsData timestamp.
     * @member {number|Long} timestamp
     * @memberof gps.GpsData
     * @instance
     */
    GpsData.prototype.timestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new GpsData instance using the specified properties.
     * @function create
     * @memberof gps.GpsData
     * @static
     * @param {gps.IGpsData=} [properties] Properties to set
     * @returns {gps.GpsData} GpsData instance
     */
    GpsData.create = function create(properties) {
      return new GpsData(properties);
    };

    /**
     * Encodes the specified GpsData message. Does not implicitly {@link gps.GpsData.verify|verify} messages.
     * @function encode
     * @memberof gps.GpsData
     * @static
     * @param {gps.IGpsData} message GpsData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GpsData.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.device_id != null &&
        Object.hasOwnProperty.call(message, 'device_id')
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.device_id);
      if (
        message.latitude != null &&
        Object.hasOwnProperty.call(message, 'latitude')
      )
        writer.uint32(/* id 2, wireType 1 =*/ 17).double(message.latitude);
      if (
        message.longitude != null &&
        Object.hasOwnProperty.call(message, 'longitude')
      )
        writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.longitude);
      if (
        message.timestamp != null &&
        Object.hasOwnProperty.call(message, 'timestamp')
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.timestamp);
      return writer;
    };

    /**
     * Encodes the specified GpsData message, length delimited. Does not implicitly {@link gps.GpsData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gps.GpsData
     * @static
     * @param {gps.IGpsData} message GpsData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GpsData.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GpsData message from the specified reader or buffer.
     * @function decode
     * @memberof gps.GpsData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gps.GpsData} GpsData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GpsData.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.gps.GpsData();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.device_id = reader.string();
            break;
          case 2:
            message.latitude = reader.double();
            break;
          case 3:
            message.longitude = reader.double();
            break;
          case 5:
            message.timestamp = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GpsData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gps.GpsData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gps.GpsData} GpsData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GpsData.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GpsData message.
     * @function verify
     * @memberof gps.GpsData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GpsData.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.device_id != null && message.hasOwnProperty('device_id'))
        if (!$util.isString(message.device_id))
          return 'device_id: string expected';
      if (message.latitude != null && message.hasOwnProperty('latitude'))
        if (typeof message.latitude !== 'number')
          return 'latitude: number expected';
      if (message.longitude != null && message.hasOwnProperty('longitude'))
        if (typeof message.longitude !== 'number')
          return 'longitude: number expected';
      if (message.timestamp != null && message.hasOwnProperty('timestamp'))
        if (
          !$util.isInteger(message.timestamp) &&
          !(
            message.timestamp &&
            $util.isInteger(message.timestamp.low) &&
            $util.isInteger(message.timestamp.high)
          )
        )
          return 'timestamp: integer|Long expected';
      return null;
    };

    /**
     * Creates a GpsData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gps.GpsData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gps.GpsData} GpsData
     */
    GpsData.fromObject = function fromObject(object) {
      if (object instanceof $root.gps.GpsData) return object;
      var message = new $root.gps.GpsData();
      if (object.device_id != null)
        message.device_id = String(object.device_id);
      if (object.latitude != null) message.latitude = Number(object.latitude);
      if (object.longitude != null)
        message.longitude = Number(object.longitude);
      if (object.timestamp != null)
        if ($util.Long)
          (message.timestamp = $util.Long.fromValue(
            object.timestamp
          )).unsigned = false;
        else if (typeof object.timestamp === 'string')
          message.timestamp = parseInt(object.timestamp, 10);
        else if (typeof object.timestamp === 'number')
          message.timestamp = object.timestamp;
        else if (typeof object.timestamp === 'object')
          message.timestamp = new $util.LongBits(
            object.timestamp.low >>> 0,
            object.timestamp.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a GpsData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gps.GpsData
     * @static
     * @param {gps.GpsData} message GpsData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GpsData.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.device_id = '';
        object.latitude = 0;
        object.longitude = 0;
        if ($util.Long) {
          var long = new $util.Long(0, 0, false);
          object.timestamp =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timestamp = options.longs === String ? '0' : 0;
      }
      if (message.device_id != null && message.hasOwnProperty('device_id'))
        object.device_id = message.device_id;
      if (message.latitude != null && message.hasOwnProperty('latitude'))
        object.latitude =
          options.json && !isFinite(message.latitude)
            ? String(message.latitude)
            : message.latitude;
      if (message.longitude != null && message.hasOwnProperty('longitude'))
        object.longitude =
          options.json && !isFinite(message.longitude)
            ? String(message.longitude)
            : message.longitude;
      if (message.timestamp != null && message.hasOwnProperty('timestamp'))
        if (typeof message.timestamp === 'number')
          object.timestamp =
            options.longs === String
              ? String(message.timestamp)
              : message.timestamp;
        else
          object.timestamp =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timestamp)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timestamp.low >>> 0,
                  message.timestamp.high >>> 0
                ).toNumber()
              : message.timestamp;
      return object;
    };

    /**
     * Converts this GpsData to JSON.
     * @function toJSON
     * @memberof gps.GpsData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GpsData.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GpsData;
  })();

  gps.GpsResponse = (function () {
    /**
     * Properties of a GpsResponse.
     * @memberof gps
     * @interface IGpsResponse
     * @property {string|null} [message] GpsResponse message
     */

    /**
     * Constructs a new GpsResponse.
     * @memberof gps
     * @classdesc Represents a GpsResponse.
     * @implements IGpsResponse
     * @constructor
     * @param {gps.IGpsResponse=} [properties] Properties to set
     */
    function GpsResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GpsResponse message.
     * @member {string} message
     * @memberof gps.GpsResponse
     * @instance
     */
    GpsResponse.prototype.message = '';

    /**
     * Creates a new GpsResponse instance using the specified properties.
     * @function create
     * @memberof gps.GpsResponse
     * @static
     * @param {gps.IGpsResponse=} [properties] Properties to set
     * @returns {gps.GpsResponse} GpsResponse instance
     */
    GpsResponse.create = function create(properties) {
      return new GpsResponse(properties);
    };

    /**
     * Encodes the specified GpsResponse message. Does not implicitly {@link gps.GpsResponse.verify|verify} messages.
     * @function encode
     * @memberof gps.GpsResponse
     * @static
     * @param {gps.IGpsResponse} message GpsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GpsResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.message != null &&
        Object.hasOwnProperty.call(message, 'message')
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.message);
      return writer;
    };

    /**
     * Encodes the specified GpsResponse message, length delimited. Does not implicitly {@link gps.GpsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof gps.GpsResponse
     * @static
     * @param {gps.IGpsResponse} message GpsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GpsResponse.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GpsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof gps.GpsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {gps.GpsResponse} GpsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GpsResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.gps.GpsResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.message = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GpsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof gps.GpsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {gps.GpsResponse} GpsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GpsResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GpsResponse message.
     * @function verify
     * @memberof gps.GpsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GpsResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.message != null && message.hasOwnProperty('message'))
        if (!$util.isString(message.message)) return 'message: string expected';
      return null;
    };

    /**
     * Creates a GpsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof gps.GpsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {gps.GpsResponse} GpsResponse
     */
    GpsResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.gps.GpsResponse) return object;
      var message = new $root.gps.GpsResponse();
      if (object.message != null) message.message = String(object.message);
      return message;
    };

    /**
     * Creates a plain object from a GpsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof gps.GpsResponse
     * @static
     * @param {gps.GpsResponse} message GpsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GpsResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.message = '';
      if (message.message != null && message.hasOwnProperty('message'))
        object.message = message.message;
      return object;
    };

    /**
     * Converts this GpsResponse to JSON.
     * @function toJSON
     * @memberof gps.GpsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GpsResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GpsResponse;
  })();

  return gps;
})();

module.exports = $root;
