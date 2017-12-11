#!/bin/sh

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
source ~/.bashrc

nvm install 7
npm install express --save-dev

git clone https://github.com/JacquelinLouis/ArchitectureAndInfrastructures.git
node nodejs/app.js &

npm install pm2@latest -g

sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup upstart -u vagrant --hp /home/vagrant
pm2 save