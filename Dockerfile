FROM node:12

WORKDIR /usr/srv/links_info_crosver_api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD ["npm", "start"]