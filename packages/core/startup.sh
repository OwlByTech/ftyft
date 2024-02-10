#!/bin/sh

echo "Fetching packages..."
yarn

echo "Running migration..."
yarn migrate:dev

echo $DATABASE_URL

if [ $ENV = "prod" ]; then
  echo "------------ PRODUCTION MODE ------------"
  yarn start
else
  echo "------------ DEVELOPMENT MODE ------------"
  yarn run dev
fi