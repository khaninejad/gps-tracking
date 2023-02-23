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


grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:./ \
--js_out=import_style=commonjs:./ \
--grpc_out=grpc_js:./ \
${SRC_DIR}/gps.proto 