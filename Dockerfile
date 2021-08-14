FROM node:alpine

WORKDIR /app

COPY app.js .
COPY package.json .
COPY server-start.json .

RUN apk add --no-cache tzdata
RUN npm install
RUN npm install pm2 -g

ENV TZ=Asia/Bangkok

# CMD npm start
CMD pm2-runtime start server-start.json 