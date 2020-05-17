#!/bin/sh

check_param() {
  if [ -z "$2" ]; then
	echo $1 "not set"
	exit 1
  fi
} 

check_param "MAIN_API" $MAIN_API
check_param "GITHUB_API" $GITHUB_API

echo "var config = {
  api: { github: '$GITHUB_API', main: '$MAIN_API' }
}" | tee /usr/share/nginx/html/config.js
