# cache-datetime
A datetime factory that works well with cached API and Web requests, by rounding to a minutes value.

## Install
`npm install --save cache-datetime`

or 

`yarn add cache-datetime`

## Example

```
const cacheDatetime = require('cache-datetime');

// current epoch rounded down to the last five minutes (default)
const myDatetime5 = cacheDatetime();

// current epoch rounded down to the last ten minutes
const myDatetime10 = cacheDatetime({ minutes: 10 });

// current epoch rounded up to the nearest 10 minutes
const myDatetimeUp10 = cacheDatetime({ minutes: 10, round: Math.ceil });

// current Date object (not the default result type)
const myDateObject = cacheDatetime({ epoch: false });
```
