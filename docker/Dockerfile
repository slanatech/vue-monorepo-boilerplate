FROM node:8-alpine
MAINTAINER sv2 <sv2@slana.tech>

WORKDIR /app

ENV NODE_ENV=production

RUN yarn global add lerna

COPY package.json lerna.json yarn.lock /app/
RUN yarn

COPY packages/common /app/packages/common

RUN yarn run bootstrap

COPY /docker/entrypoint.sh /app/

ENTRYPOINT ["./entrypoint.sh"]
