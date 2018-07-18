# spy-module.js

# Module that exports a sinon spy for testing calls to require()

## Current status

[![NPM version](https://img.shields.io/npm/v/spy-module.svg)](https://www.npmjs.com/package/spy-module)
[![Build Status](https://img.shields.io/travis/overlookmotel/spy-module/master.svg)](http://travis-ci.org/overlookmotel/spy-module)
[![Dependency Status](https://img.shields.io/david/overlookmotel/spy-module.svg)](https://david-dm.org/overlookmotel/spy-module)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/spy-module.svg)](https://david-dm.org/overlookmotel/spy-module)
[![Greenkeeper badge](https://badges.greenkeeper.io/overlookmotel/spy-module.svg)](https://greenkeeper.io/)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/spy-module/master.svg)](https://coveralls.io/r/overlookmotel/spy-module)

## Usage

A tiny module which exports a [sinon](https://www.npmjs.com/package/sinon) spy.

Useful if you need to test some code which requires a module with `require()` and calls the function which the module exports.

This module exports a spy function which returns `{returnProp: 123}`. The return value of the function is also recorded on the function as `.spyModuleReturnValue`.

The spy also has a property `.isSpyModule` set to `true`.

```js
const spy = require('spy-module');
console.log(spy.isSpyModule); // true
console.log(spy.spyModuleReturnValue); // {returnProp: 123}

const ret = spy.call( {ctxProp: 456}, 'arg' );
console.log(ret); // {returnProp: 123}
console.log(spy.called); // true
console.log(spy.callCount); // 1
console.log(spy.lastCall.thisValue); // {ctxProp: 456}
console.log(spy.lastCall.args); // [ 'arg' ]
```

## Tests

Use `npm test` to run the tests. Use `npm run cover` to check coverage.

## Changelog

See [changelog.md](https://github.com/overlookmotel/spy-module/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookmotel/spy-module/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add an entry to changelog
* add tests for new features
* document new functionality/API additions in README
