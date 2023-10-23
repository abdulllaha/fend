# fend-evaluate-news-nlp

## Description

this is a udacity nodejs express project
the project main focus is on the webpack and webpack plugins.
for managing build releases for deferent environment and minifing css and js files.

## Development
javascript ES6, HTML5, CSS, nodejs 20, express and webpack

## Instruction

### Setting up the project 
followin udacity instructions; please note that my api key is not included in the project.

- create an api key in [meaningcloud](https://www.meaningcloud.com/)
- create a file named *.env* in the project root.
- write your api key in *.env* file in this format 
```js
    API_KEY = ${key}
```

### Runing the project
run
```shell
command npm ci
```

for production build and run
```shell
command npm run build-prod
command npm start
```
then navigate to localhoat:8081 in your browser

for development build and run
``` shell
command npm start
command npm run build-dev
```
then navigate to localhoat:8082 in your browser

for runing test using jest
``` shell
command npm run test
```

## Table of Contents
- [fend evaluate news nlp](#fend-evaluate-news-nlp)
- [Description](#description)
- [Instruction](#instruction)
- [Setting up the project](#setting-up-the-project)
- [Runing the project](#Runing-the-project)
- [Table of Contents](#table-of-contents)
- [Development](#development)

## Resources
Resources I used to develope the project
- [meaningcloud](https://www.meaningcloud.com//): for articles analysis api()
