# vue-monorepo-boilerplate

###Vue Fullstack App Monorepo Boilerplate

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

# 5. Run Tests in all packages 
yarn run test

```

Testing
