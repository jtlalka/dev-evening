#!/bin/sh

rm -r docs
cp -r ../../kmp/dev-events/app/build/dist/wasmJs/productionExecutable/ docs

echo "WebPage update success :)"
