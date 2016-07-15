# noFun (.js)

(Now with 100% code coverage!)

## The essential package for identifying the absence of fun.

Have you ever wondered, "Who is no fun" ? `npm install nofun`, and find out..

## Where will `noFun` run?

`noFun` will find the absence of fun in almost any form. for example:

```javascript
let nofun = require('nofun');

// prints true
console.log(nofun.isFun('Timbrook'));

// prints false
console.log(nofun.isFun('Kayla'));
```

`noFun` will also find a lack of fun in your arrays, built into your arrays as soon as you require `noFun`...

```javascript
let nofun = require('nofun');

// prints true
console.log( ['Timbrook'].hasFun() );

// prints false
console.log( ['Kayla'].hasFun() );

```

`noFun` even recursively latches onto your Objects, so if fun is missing in any nesting of Arrays and Objects, `noFun` will find it...

```javascript
let nofun = require('nofun');
let swag = {timbrook: 'is fun'};
let meme = {hasNoFun: ['has', 'to', 'be', 'kayla']};

// prints true
console.log(swag.hasFun());

// prints false
console.log(meme.hasFun());
```

## Development

- `git clone`
- `npm i`
- Sources are in index.js.
- Tests are in test.js. Run tests with `npm test`

## More coming soon!
