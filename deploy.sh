#!/bin/sh
# set root role
sudo su
# update dependencies
apt-get update
# install Node.js
apt-get install nodejs
# install yarn
apt-get install yarn
# clone public repository
git clone https://github.com/JacquelinLouis/ArchitectureAndInfrastructures.git
# move to app folder
cd ArchitectureAndInfrastructures/
# install Node.js server's dependencies
yarn install
# start server
yarn start