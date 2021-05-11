FROM node:latest AS meulindoapp

WORKDIR /home/app

COPY package.json ./

CMD bash -c "yarn && yarn start"
