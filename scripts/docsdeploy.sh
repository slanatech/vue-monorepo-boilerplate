#!/bin/bash

# abort on errors
set -e

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy for github pages'

git push -f https://github.com/slanatech/vue-monorepo-boilerplate.git master:gh-pages

cd -