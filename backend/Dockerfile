FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

EXPOSE 3000

CMD ["node","dist/server.js"]