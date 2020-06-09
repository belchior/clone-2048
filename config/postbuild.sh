#!/usr/bin/env bash

mkdir -p build/clone-2048
ls build/ |\
grep -v 'clone-2048' |\
xargs -I@ cp -r "$(pwd)/build/@" 'build/clone-2048/'
