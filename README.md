# vue-monorepo-boilerplate

### Vue Fullstack App Monorepo Boilerplate

* Lerna and Yarn Workspaces to manage monorepo
* Full Stack: Front End, Server, Common module packages   
* Front End: Vue SPA package using Vue-cli 3
* Server package using Node+Express
* Common package used in both Front End and Server
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
    "docker:build": "docker image build -t $npm_package_config_imageRepo:$npm_package_version -f ./docker/Dockerfile .",
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


## Publishing packages  

```bash
yarn run publish
```

This will publish all public packages in monorepo to npm by invoking `lerna publish`. 

Depending on your needs, you may choose to keep some or all packages private by setting `"private": true` in package.json of packages in monorepo.

For illustration, in this boilerplate common package is made public, and other packages are private.

## Travis CI 

See [.travis.yml](https://github.com/slanatech/vue-monorepo-boilerplate/blob/master/.travis.yml)

## Docker Build 

