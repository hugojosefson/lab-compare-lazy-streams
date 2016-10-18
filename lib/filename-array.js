'use strict';

module.exports = require('ramda').range(0, 10).map(i => `000${i}.json`);
