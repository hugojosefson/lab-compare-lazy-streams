'use strict';

module.exports = file => new Promise((resolve) => {
    console.log(`Reading ${file} from disk now... It takes 4 seconds...`);
    setTimeout(() => resolve(`Contents of ${file} is blah, blah, blah.`), 4000);
});