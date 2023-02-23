const grpc = require('@grpc/grpc-js');

/**
 *
 * @param maxRetries {number}
 * @param retryStatuses {number[]}
 */
module.exports = (maxRetries, retryStatuses) => {
  return function (options, nextCall) {
    let savedMetadata;
    let savedSendMessage;
    let savedReceiveMessage;
    let savedMessageNext;
    const requester = {
      start: function (metadata, listener, next) {
        savedMetadata = metadata;
        const newListener = {
          onReceiveMessage: function (message, next) {
            savedReceiveMessage = message;
            savedMessageNext = next;
          },
          onReceiveStatus: function (status, next) {
            let retries = 0;
            const retry = function (message, metadata) {
              console.log(
                `[grpc] Received code ${status.code} Retry trial [${retries}]`
              );
              retries++;
              const newCall = nextCall(options);
              const retryListener = {
                onReceiveMessage: function (message) {
                  savedReceiveMessage = message;
                },
                onReceiveStatus: function (status) {
                  if (retryStatuses.includes(status.code)) {
                    if (retries <= maxRetries) {
                      retry(message, metadata);
                    } else {
                      savedMessageNext(savedReceiveMessage);
                      next(status);
                    }
                  } else {
                    savedMessageNext(savedReceiveMessage);
                    next({code: grpc.status.OK});
                  }
                },
              };
              newCall.start(metadata, retryListener);
              newCall.sendMessage(savedSendMessage); // Added Call
              newCall.halfClose(); // Added Call
            };
            if (retryStatuses.includes(status.code)) {
              retry(savedSendMessage, savedMetadata);
            } else {
              savedMessageNext(savedReceiveMessage);
              next(status);
            }
          },
        };
        next(metadata, newListener);
      },
      sendMessage: function (message, next) {
        savedSendMessage = message;
        next(message);
      },
    };
    return new grpc.InterceptingCall(nextCall(options), requester);
  };
};
