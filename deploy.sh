#!/bin/sh
# update dependencies
apt-get update
echo 'Updated dependencies'
# install Node.js, confirm yes
apt-get install nodejs -y
echo 'Installed Node.js'
# install yarn, confirm yes
apt-get install yarn -y
echo 'Installed Yarn'
# clone public repository
git clone https://github.com/JacquelinLouis/ArchitectureAndInfrastructures.git
echo 'Cloned repository from https://github.com/JacquelinLouis/ArchitectureAndInfrastructures.git'
# move to app folder
cd ArchitectureAndInfrastructures/
# install Node.js server's dependencies
yarn install
echo 'Yarn install command executed'
# start server
yarn start