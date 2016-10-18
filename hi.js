'use strict';

const filenameArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => `000${i}.json`);

const promiseOfFileContents = file => new Promise((resolve) => {
    console.log(`Reading ${file} from disk now... It takes 4 seconds...`);
    setTimeout(() => resolve(`Contents of ${file} is blah, blah, blah.`), 4000);
});

// ---

const _ = require('highland');

const files = _(filenameArray);

const fileContents = files
    .flatMap(file => _(promiseOfFileContents(file)));


const oneFile = fileContents.take(1);
oneFile.each(console.log.bind(console));
