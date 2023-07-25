#!/bin/bash

echo "###### Deploying changes ######"

# Replace '/path/to/your/app' with the actual path to your application's repository
APP_PATH="/Users/msaber/Downloads/Web7-main"

echo "------ Git pull ------"
cd $APP_PATH
git pull

echo "------ Removing old containers ------"
docker-compose -f $APP_PATH/docker-compose.yml down

echo "------ Building new containers ------"
docker-compose -f $APP_PATH/docker-compose.yml build

echo "------ Running new containers ------"
docker-compose -f $APP_PATH/docker-compose.yml up -d

echo "###### Deployed! ######"
