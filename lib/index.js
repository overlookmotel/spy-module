/* --------------------
 * spy-module module
 * ------------------*/

'use strict';

// Modules
const sinon = require('sinon');

// Exports
const ret = {returnProp: 123};
const spy = sinon.fake.returns(ret);
spy.spyModuleReturnValue = ret;
spy.isSpyModule = true;

module.exports = spy;
