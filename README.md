# [Angular Boilerplate][root] [![Build Status](https://travis-ci.org/Eruant/angular-boilerplate.svg?branch=master)][travis]

A starting point to build an Angular application

## Pre-requisites

Make sure that you have [node][node] and [gulp][gulp] setup.

## Setup

To get the files first clone this repository

```sh
$ git clone git@github.com:Eruant/angular-boilerplate.git
```

Install the `node` modules.

```sh
$ npm install
```

Finally run `gulp` to test the files and start a local server.

```sh
$ gulp
```

> **Please Note:** You should only edit files in the `src` dir. The `app` directory is a compiled version that will get overwritten on each build.

## File organisation

The files have been organised in a modular way.

```
/src
  app.js
  app_test.js
  index.html
  /home
    home.js
    home_test.js
    home.html
```

As you can see each folder contains a module declaration file, a test file and a view. It can also contain the CSS and image files. The format is repeated in the folders below. This means that each module can be placed inside of another module, which means copying from project to project can be achieved.

[root]:   https://github.com/Eruant/angular-boilerplate
[travis]: https://travis-ci.org/Eruant/angular-boilerplate
[node]:   http://nodejs.org/
[gulp]:   http://gulpjs.com/
