'use strict';

const filenameArray = require('./lib/filename-array');
const promiseOfFileContents = require('./lib/promise-of-file-contents');

// ---

const Rx = require('rxjs/Rx');
const files = Rx.Observable.from(filenameArray);

const fileContents = files
    .map(file => promiseOfFileContents(file))
    .mergeAll();

const oneFile = fileContents.take(1);
oneFile.subscribe(console.log.bind(console));
