#! /bin/bash


SRC_DIR=./src/proto
DEST_DIR=./src/proto/generated



# protobuf.js
node_modules/.bin/pbjs \
--target static-module \
--wrap commonjs \
--keep-case \
--path ${SRC_DIR} \
--out ${DEST_DIR}/client.grpc.js \
${SRC_DIR}/gps.proto

node_modules/.bin/pbts \
--out ${DEST_DIR}/client.grpc.d.ts \
${DEST_DIR}/client.grpc.js
