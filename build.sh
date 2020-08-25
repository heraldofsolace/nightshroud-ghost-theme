#!/bin/bash

mkdir -p build/nightshroud-theme
rm -rf build/nightshroud-theme/*
rsync -aAxv --exclude="node_modules" --exclude="nightshroud-*" . build/nightshroud-theme/
cd build/
zip -r nightshroud-theme.zip nightshroud-theme/*
