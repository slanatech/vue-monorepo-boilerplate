#!/usr/bin/env bash

docker run -d -p 3200:3200 --name app --restart always slanatech/vue-monorepo-boilerplate:0.1.9
