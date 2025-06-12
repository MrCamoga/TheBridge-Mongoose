FROM node:24-alpine as builder

RUN mkdir -p /root/src

WORKDIR /root/src

COPY ["package.json","package-lock.json","./"]

RUN npm install

COPY . .

RUN ls -la . && ls -la node_modules

CMD ["npm","start"]
