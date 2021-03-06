[![Build Status](https://travis-ci.org/dhlab-basel/knora-admin.svg?branch=master)](https://travis-ci.org/dhlab-basel/knora-admin)

# Knora Admin

This app will be for Knora system administrators.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

Developed by the [DaSCH Team](https://dasch.swiss) in Basel.

## Prerequisites

We develop the Knora-ui modules with Angular 6, especially with Angular-cli, which requires the following tools:

### Yarn
We use [yarn](https://yarnpkg.com/en/) instead of npm. To install yarn on macOS:

```bash
$ brew install yarn
```

For other platforms, please go to the yarn website.


### Node
Install [Node](https://nodejs.org/en/download/) in version >=4 <=9. We recommend to use version 8.9.0. The easiest way to install node
in the correct version is to use ['n'](https://github.com/tj/n):

 ```bash
 $ yarn global add n
 $ n v8.9.0
 ```

## First steps

Install the node packages with:
```bash
$ yarn install --prod=false
```

build with:

```bash
$ yarn build
```

run with:

```bash
$ ng s
or
$ ng s --prod
```


## Install
Run `yarn install --prod=false` to install all the package dependencies.

## Serve

Run `ng serve` for a dev server. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
