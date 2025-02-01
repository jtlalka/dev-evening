#!/bin/sh

rm -r docs
cp -r ../../ideas/dev-events/app/build/dist/wasmJs/productionExecutable/ docs

echo "WebPage update success :)"
