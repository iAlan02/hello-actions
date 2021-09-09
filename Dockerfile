FROM node:16-alpine3.11

WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent