#!/bin/bash

# List of packages to update
packages=(
  "react-scripts"
  "figgy-pudding"
  "source-map-url"
  "flatten"
  "eslint-loader"
  "request-promise-native"
  "har-validator"
  "resolve-url"
  "domexception"
  "source-map-resolve"
  "acorn-dynamic-import"
  "left-pad"
  "sane"
  "chokidar"
  "workbox-google-analytics"
  "babel-eslint"
  "html-webpack-plugin"
  "uuid"
  "request"
  "@hapi/hoek"
  "@hapi/joi"
  "core-js"
)

# Update each package one by one
for pkg in "${packages[@]}"; do
  echo "Updating $pkg..."
  npm install --save-dev "$pkg@latest"

  # Check if the update was successful
  if [ $? -eq 0 ]; then
    echo "Successfully updated $pkg"
  else
    echo "Failed to update $pkg. Exiting..."
    exit 1
  fi
done


