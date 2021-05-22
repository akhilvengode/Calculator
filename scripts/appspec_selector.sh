#!/bin/bash

echo "selecting appspec.yml file based on the env vlaue - ${DTM_ENV}"

if [[ ${DTM_ENV} = "STAGING" ]]
then
  echo "copying appspec-stg.yml to project root as appspec.yml"
  cp scripts/appspec-stg.yml appspec.yml
  echo "copied stg-appspec file to project root"
  exit 0
elif [[ $DTM_ENV = "PRODUCTION" ]]
then
  echo "copying appspec-prd.yml to project root as appspec.yml"
  cp scripts/appspec-prd.yml appspec.yml
  echo "copied prd-appspec file to project root"
  exit 0
else
  echo "build environment not recognized!, failed to select appspec.yml file!"
  exit 1
fi