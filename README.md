# lab-compare-lazy-streams

Comparing laziness of stream libs.

## Objective

I want to see how I can have a stream that I can slowly `take(1)` item from, in a way that keeps all
loading of resources lazy all the way back.

This means that if I have a stream of files being read from disk, I only want to it to actually read
files from disk when it is necessary.
 
## How to use

### Prerequisites

* Have Node.js 6.
* Run `npm install` to download dependencies.

### Example with RxJS

```bash
node rx.js
```

Example source code: [rx.js](./rx.js)

RxJS web page: http://reactivex.io/rxjs/

### Example with Highland

```bash
node hi.js
```

Example source code: [hi.js](./hi.js)

Highland web page: http://highlandjs.org/


## What to look for

The examples try to do the same thing:

* Simulate loading of ten files (each takes 4 seconds, and returns a `Promise` for the file's
contents).
* `take(1)` from a stream of the files' contents.

You should look for log outputs which show you when the implementation forces "file loading" to
occur. The one that only loads the first file when asked for the first data, is truly lazy in this
example..!

## Help!

Am I missing anything? Should this be possible with RxJS or another lib?

Please [file an issue](https://github.com/hugojosefson/lab-compare-lazy-streams/issues), [pull
request](https://github.com/hugojosefson/lab-compare-lazy-streams/pulls) or contact me on Twitter
[@hugojosefson](https://twitter.com/hugojosefson).

Thanks for playing :)
