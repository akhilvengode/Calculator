#!/bin/bash

API_CONFIG_FILE=".env"

echo "Building SMM DTM V4 API config file..."
echo "SMM DTM V4 API URL >  ${SMM_DTM_V4_API_URL}"

touch $API_CONFIG_FILE
echo "API_URL = ${SMM_DTM_V4_API_URL}" >> $API_CONFIG_FILE

echo "SMM DTM V4 API config file created"
exit 0

