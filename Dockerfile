FROM node:9.3.0-alpine

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

RUN npm install -g create-react-app

ADD yarn.lock /app/yarn.lock
ADD package.json /app/package.json

WORKDIR /app

RUN yarn install

ADD . /app

EXPOSE 3000:3000
EXPOSE 35729:35729

CMD ["yarn", "start"]
