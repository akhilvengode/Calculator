#!/bin/bash

API_CONFIG_FILE=".env"

echo "Building NCAT API config file..."
echo "NCAT API URL >  ${NCAT_API_URL}"

touch $API_CONFIG_FILE
echo "API_URL = ${NCAT_API_URL}" >> $API_CONFIG_FILE

echo "NCAT API config file created"
exit 0