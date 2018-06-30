# vue-monorepo-boilerplate

[![Build Status](https://travis-ci.org/slanatech/vue-monorepo-boilerplate.svg?branch=master)](https://travis-ci.org/slanatech/vue-monorepo-boilerplate)

### Vue Fullstack App Monorepo Boilerplate

* Lerna and Yarn Workspaces to manage monorepo
* Full Stack: Front End, Server, Common module packages   
* Front End package: Vue SPA using Vue-cli 3
* Server package: Node+Express
* Common package: common code used in both Front End and Server
* Docs using Vuepress and Github pages
* CI/CD using Travis CI
* Docker build   


## Prerequisites

This boilerplate uses [Lerna](https://lernajs.io/) and [Yarn](https://yarnpkg.com/lang/en/) workspaces to manage packages in monorepo. 
[vue-cli](https://cli.vuejs.org/) is used in UI package. Suggest to install [Lerna](https://lernajs.io/), [Yarn](https://yarnpkg.com/en/docs/install) and [vue-cli](https://cli.vuejs.org/) globally in dev environment  


## Quick start

```bash
# 1. Clone the repository.
git clone https://github.com/slanatech/vue-monorepo-boilerplate.git my-new-project

# 2. Enter your newly-cloned folder
cd my-new-project

# 3. Bootstrap
yarn run bootstrap

# 4. Run Build in all packages 
yarn run build

# 5. Dev: Run Server and in parallel start UI Serve with hot reload 
yarn run dev

```

## Top-Level Scripts


```json
  "scripts": {
    "bootstrap": "lerna bootstrap",
    "dev": "concurrently --kill-others --success first \"npm start --prefix ./packages/server\" \"npm run serve --prefix ./packages/ui\"",
    "test": "npm run test:common && npm run test:server && npm run test:ui",
    "test:common": "npm test --prefix ./packages/common",
    "test:server": "npm test --prefix ./packages/server",
    "test:ui": "npm test --prefix ./packages/ui",
    "build": "lerna run build",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "docs:deploy": "yarn run docs:build && ./scripts/docsdeploy.sh",
    "docker:build": "IMAGE_VERSION=$(node -p \"require('./lerna.json').version\") && docker image build -t $npm_package_config_imageRepo:$IMAGE_VERSION -f ./docker/Dockerfile .",
    "publish": "lerna publish"
  }

```

* `bootstrap` - install all packages and setup links for internal packages using lerna  
* `dev` - run Server and in parallel start UI Serve with hot reload
* `test` - execute tests in all packages 
* `test:common` -  execute tests in common package
* `test:server` -  execute tests in server package
* `test:ui` -  execute tests in UI package
* `build` -  execute build script in all packages
* `docs:dev` - vuepress documentation development   
* `docs:build` -  build vuepress docs 
* `docs:deploy` - deploy vuepress docs to github pages 
* `docker:build` - build Docker image 
* `publish` - publish public packages using lerna 


## Dev   

Top-level script `yarn run dev` starts Server package that contains back end API implementation.
And in parallel starts `vue-cli-service serve` script in UI package.
This allows UI development with hot reloading, with dev server proxying API requests to API implementation


`vue.config.js` in UI package is configured to proxy API requests:

```js
// vue.config.js
module.exports = {
  devServer: {
    proxy: 'http://localhost:3200'
  }
}
```    
  

## Publishing packages  

```bash
yarn run publish
```

This will publish all public packages in monorepo to npm by invoking `lerna publish`. 

Depending on your needs, you may choose to keep some or all packages private by setting `"private": true` in package.json of packages in monorepo.

For illustration, in this boilerplate common package is made public, and other packages are private.

## Docker Build 

Top-level script `yarn run docker:build` builds Docker image that contains entire Full Stack app: 

* UI package - compiled UI static files (`/dist`)
* Common module package
* Server package that implements API and serves UI static files 

Docker build context is top level directory, so all app packages can be accessed.

Docker image entrypoint script just starts server, and you may access UI at [http://localhost:3200](http://localhost:3200)

See `Dockefile` [https://github.com/slanatech/vue-monorepo-boilerplate/blob/master/docker/Dockerfile](https://github.com/slanatech/vue-monorepo-boilerplate/blob/master/docker/Dockerfile)

Dockerfile is set up with two goals in mind:

* Utilize layers cache with minimal rebuild when app code changes
* Don't publish all packages to npm on every build 

These layers with 3rd party modules will be cached on Docker image rebuild if only app code changes:

```dockerfile
RUN yarn global add lerna

COPY package.json lerna.json yarn.lock /app/
COPY packages/common/package.json /app/packages/common/package.json
COPY packages/server/package.json /app/packages/server/package.json
COPY packages/ui/package.json /app/packages/ui/package.json

RUN yarn install --production=true

``` 

And this copies app code - only relevant content from local packages - to Docker image.
These layers will be rebuilt when app code changes:

```dockerfile
# Application Packages
ADD packages/common/lib /app/packages/common/lib/
COPY packages/server/server.js /app/packages/server/server.js
ADD packages/ui/dist /app/packages/ui/dist/
``` 

Finally, `bootstrap` to ensure proper symlinks to local packages are set up in `node_modules`: 

```dockerfile
RUN yarn run bootstrap
```   

Example of `docker run`:

```bash
#!/usr/bin/env bash

docker run -d -p 3200:3200 --name app --restart always slanatech/vue-monorepo-boilerplate:0.1.8
```

## CI/CD

CI/CD is set up using Travis CI


See `.travis.yml` [https://github.com/slanatech/vue-monorepo-boilerplate/blob/master/.travis.yml](https://github.com/slanatech/vue-monorepo-boilerplate/blob/master/.travis.yml)

`before_install` executes `bootstrap` to ensure local packages are resolved:

```yaml
before_install:
  - yarn && yarn run bootstrap
``` 

Then build script just executes `build`,`test`, and `docker:build`

```yaml
script:
  - yarn run build
  - yarn run test
  - yarn run docker:build

```
If desired, you may extend `.travis.yml` adding publishing packages to npm, and publishing docker image to Docker registry.  


## Enhancements and Bug Reports

If you find a bug, or have an enhancement in mind please post [issues](https://github.com/slanatech/vue-monorepo-boilerplate/issues) on GitHub.
Suggestions and feedback are very welcome !


## License
 
MIT
