#!/bin/bash

mkdir -p nightshroud-theme
rm -rf nightshroud-theme/*
rsync -aAxv --exclude="node_modules" --exclude="nightshroud-*" . nightshroud-theme/
zip -r nightshroud-theme.zip nightshroud-theme/*
