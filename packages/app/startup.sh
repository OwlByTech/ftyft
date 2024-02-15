#!/bin/sh

echo "Fetching packages..."
yarn

if [ $ENV = "prod" ]; then
  echo "------------ PRODUCTION MODE ------------"
  yarn build
  yarn astro
else
  echo "------------ DEVELOPMENT MODE ------------"
  yarn start
fi