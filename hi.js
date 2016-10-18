'use strict';

const filenameArray = require('./lib/filename-array');
const promiseOfFileContents = require('./lib/promise-of-file-contents');

// ---

const _ = require('highland');

const files = _(filenameArray);

const fileContents = files
    .flatMap(file => _(promiseOfFileContents(file)));


const oneFile = fileContents.take(1);
oneFile.each(console.log.bind(console));
