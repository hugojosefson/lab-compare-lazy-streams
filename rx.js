'use strict';

const filenameArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => `000${i}.json`);

const promiseOfFileContents = file => new Promise((resolve) => {
    console.log(`Reading ${file} from disk now... It takes 4 seconds...`);
    setTimeout(() => resolve(`Contents of ${file} is blah, blah, blah.`), 4000);
});

// ---

const Rx = require('rxjs/Rx');
const files = Rx.Observable.from(filenameArray);

const fileContents = files
    .map(file => promiseOfFileContents(file))
    .mergeAll();

const oneFile = fileContents.take(1);
oneFile.subscribe(console.log.bind(console));
