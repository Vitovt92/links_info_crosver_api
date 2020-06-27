FROM node:12

WORKDIR /usr/srv/links_info_crosver_api

ENV NODE_ENV=production

ENV SERVER_PORT=8081

COPY package*.json ./

RUN npm install --no-optional

RUN npm install pm2 -g

COPY ./dist .

EXPOSE 8081


ENTRYPOINT ["pm2-runtime", "index.js"]