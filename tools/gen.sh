#! /bin/bash


SRC_DIR=./src/proto
DEST_DIR=./src/proto/generated



grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:./ \
--js_out=import_style=commonjs:./ \
--grpc_out=grpc_js:./ \
${SRC_DIR}/gps.proto 

cp -R ${SRC_DIR} ./build/src