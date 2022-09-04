#!/usr/bin/bash

set -e

npm run build

cd dist
git init
git add -A
git commit -m 'DEPLOY'
git push -f git@github.com:cheukyin699/cangjie-dictionary.git master:gh-pages

cd -
