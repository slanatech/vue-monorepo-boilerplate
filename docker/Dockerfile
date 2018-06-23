FROM node:8-alpine
MAINTAINER sv2 <sv2@slana.tech>

WORKDIR /app

ENV NODE_ENV=production

RUN yarn global add lerna

COPY package.json lerna.json yarn.lock /app/
COPY packages/common/package.json /app/packages/common/package.json
COPY packages/server/package.json /app/packages/server/package.json
COPY packages/ui/package.json /app/packages/ui/package.json

RUN yarn install --production=true

# Application Packages
ADD packages/common/lib /app/packages/common/lib/
COPY packages/server/server.js /app/packages/server/server.js
ADD packages/ui/dist /app/packages/ui/dist/

RUN yarn run bootstrap

COPY /docker/entrypoint.sh /app/

ENTRYPOINT ["./entrypoint.sh"]
